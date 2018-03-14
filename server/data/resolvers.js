import {signup, login, addTodo, updateTodo, deleteTodo} from "./mutations"

const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../constants')
import store from '../store/filestore'


function translateToken(token) {
  if (!token || token===null || token==="null")
    return null
  return jwt.verify(token, APP_SECRET)
}

function getUserId(context) {
  const Authorization = context.Authorization
  if (Authorization && Authorization !== "null") {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }
  throw new Error('Not authenticated')
}

const resolvers = {
  Query: {
    async userFromToken(root, {token}) {
      let usr = await translateToken(token)
      if (!usr) throw(`Cannot find user for provided token`)
      let user = await store.user({ where: { email: usr.userId } })
      return { token, user }
    },
    allTodos(root, args, ctx) {
      return store.allTodos(getUserId(ctx))
    }
  },
  Mutation: {
    signup(root, args, ctx, info) {
      return signup(args)
    },
    login(root, args, ctx, info) {
      return login(args)
    },
    addTodo(root, args, ctx, info) {
      return addTodo(getUserId(ctx), args)
    },
    updateTodo(root, args, ctx, info) {
      return updateTodo(getUserId(ctx), args)
    },
    deleteTodo(root, args, ctx, info) {
      return deleteTodo(getUserId(ctx), args)
    },

  },
  User: {
    password() {
      return "****"
    }
  },
}

export default resolvers;
