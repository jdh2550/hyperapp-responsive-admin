const fs = require('promise-fs')
const jwt = require('jsonwebtoken')
const guid = require('guid')
const { APP_SECRET } = require('../constants')

const store = {
  createUser: async (args) => await _createUser(args),
  user: async (args) => await _findUser(args),
  addTodo: async (userId, args) => await _addTodo(userId, args),
  updateTodo: async (userId, args) => await _updateTodo(userId, args),
  deleteTodo: async (userId, args) => await _deleteTodo(userId, args),
  allTodos: async (userId) => await _allTodos(userId)
}
export default store;

const USERS = 'store/users.json'

let users = null
function _loadUsers() {
  if (users === null) {
    return fs.readFile(USERS).then((contents)=> {
        users = JSON.parse(contents)
        return users
      })
  }
  return Promise.resolve(users)
}

function _getUser(userId) {
  return _loadUsers().then(()=>{
    if (!users[userId]) throw `Unknown user: ${userId}`
    return users[userId]
  })
}

function _createUser({name, email, password}) {
  return _loadUsers().then(()=>{
    if (users[email]) throw `User with email of ${email} already exists`
    users[email]={name,email,password}
    fs.writeFile(USERS, JSON.stringify(users,null,2))
    return {name,email,password}
  })
}

function _findUser({where}) {
  return _loadUsers().then(()=>{
    if (!where) return users
    if (!where.email) throw `_findUser only supports search on email`
    let user=users[where.email]
    return user
  })
}

function _allTodos(userId) {
  return _getUser(userId).then((user) => {
    return user.todos || []
  })
}

function _addTodo(userId, args) {
  return _getUser(userId).then((user)=>{
    let todos = user.todos || []
    let todo = { id: guid.raw(), value: args.value, done: false }
    todos.push(todo)
    user.todos = todos
    fs.writeFile(USERS, JSON.stringify(users,null,2))
    return todo
  })
}

function _updateTodo(userId, args) {
  return _getUser(userId).then((user)=>{
    let todos = user.todos || []
    let todo = todos.find((t) => {return t.id===args.id})
    if (!todo) throw `cannot find todo with id: ${args.id}`
    user.todos = todos.map(t =>
      t.id==args.id
        ? Object.assign({},args)
        : t)
    fs.writeFile(USERS, JSON.stringify(users,null,2))
    return args
  })
}

function _deleteTodo(userId, args) {
  return _getUser(userId).then((user)=>{
    let todos = user.todos || {}
    user.todos = todos.filter((t) => {return t.id!==args.id})
    fs.writeFile(USERS, JSON.stringify(users,null,2))
    return true
  })
}

// initialize the store
if (!fs.existsSync(USERS)) {
  fs.writeFile(USERS, "{}")
  users = {}
}
