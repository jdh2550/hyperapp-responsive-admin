const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../constants')
import store from '../store/filestore'

async function signup(args) {
  let name = args.name
  let email = args.email
  const password = await bcrypt.hash(args.password, 10)
  const user = await store.createUser({name, email, password})
  const token = jwt.sign({ userId: user.email }, APP_SECRET)
  return {
    token,
    user,
  }
}

async function login(args) {
  const user = await store.user({ where: { email: args.email } })
  if (!user) throw new Error(`Could not find user with email: ${args.email}`)
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) throw new Error('Invalid password')
  const token = jwt.sign({ userId: user.email }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function addTodo(userId, args) {
  return await store.addTodo(userId, args)
}
async function updateTodo(userId, args) {
  return await store.updateTodo(userId, args)
}
async function deleteTodo(userId, args) {
  return await store.deleteTodo(userId, args)
}

module.exports = {
  signup, login,
  addTodo, updateTodo, deleteTodo
}
