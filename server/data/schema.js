import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  userFromToken(token: String!): AuthPayload
  allTodos: [Todo]
}

type Mutation {
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
  addTodo(value: String!): Todo
  updateTodo(id: String!, value: String, done: Boolean): Todo
  deleteTodo(id: String!): Boolean
}

type AuthPayload {
  token: String!
  user: User!
}

type User {
  email: String!
  name: String!
  password: String!
}

type Todo {
  id: String!,
  done: Boolean!,
  value: String!
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
