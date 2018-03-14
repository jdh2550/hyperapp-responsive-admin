import { graphql } from "./graphql"

export const userActions = {
  createaccount: (args) => (state, actions) => {
    return graphql.user.createAccount(actions, args)
  },
  login: (args) => (state, actions) => {
    return graphql.user.login(actions, args)
  },
  logout: () => () => {
    window.localStorage.removeItem("user")
    return { name: null, email: null, token: null, rememberMe: null }
  },
  setUserFromToken: (token) => (state, actions) => {
    return graphql.user.getUserFromToken(actions, token)
  },
  setUser: ({name,email,token,rememberMe}) => () => ({name,email,token,rememberMe})
}
