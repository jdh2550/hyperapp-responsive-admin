import {GraphQLClient} from "graphql-request"

const gqlClient = new GraphQLClient("http://localhost:4501/graphql")

export const userGraphQL = {

  createAccount: (actions, {email, password, name, rememberMe}) => {
    return _callGraphQL(actions, rememberMe, CREATE_MUTATION, {email, password, name}, "signup")
      .then(result => {
        return ({result})
      })

  },
  login: (actions, {email, password, rememberMe})  => {
    return _callGraphQL(actions, rememberMe, LOGIN_MUTATION, {email,password}, "login")
      .then(result => {
        return ({result})
      })
  },
  getUserFromToken: (actions, token) => {
    return _callGraphQL(actions, true, TOKEN_QUERY, {token}, "userFromToken")
      .then(result => {
        return (result)
      })
  }
}

const TOKEN_QUERY = `
query tokenQuery($token: String!)
{
  userFromToken(token: $token) {
    token
    user {
      email
      name
    }
  }
}
`

const LOGIN_MUTATION = `
mutation loginMutations($email: String!, $password: String!)
   {
    login(email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`

const CREATE_MUTATION = `
  mutation signupMutation($name: String!, $email: String!, $password: String!){
    signup(name: $name email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`

function _callGraphQL(actions, rememberMe, gql, variables, key) {
  return gqlClient.request(gql, variables)
    .then(data => {
      let user = Object.assign({}, data[key].user)
      user.token = data[key].token
      token = user.token
      user.rememberMe = rememberMe
      window.localStorage.setItem("user",JSON.stringify(user,null,2))
      actions.setUser(user)
      return ({success:true})
    })
    .catch(data => {
      return ({success:false, message: data.response.errors[0].message})
    })
}

let gqlSecureClient = null
let token = null;

export function getClient() {
  if (gqlSecureClient !== null) return gqlSecureClient
  gqlSecureClient = new GraphQLClient("http://localhost:4501/graphql", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return gqlSecureClient
}
