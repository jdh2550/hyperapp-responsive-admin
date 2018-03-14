import {getClient} from './user-graphql'

export const todoGraphQL = {
  getAll: (actions) => {
    return getClient().request(ALL_TODOS_QUERY)
      .then((data) => {actions.setTodos(data.allTodos)})
  },
  add: (state, actions) => {
    return getClient().request(ADD_TODO_MUTATION, {value: state.input})
      .then((data) => {
        actions.setTodos(state.todos.concat(data.addTodo))
      })
  },
  edit: (state, actions, todo) => {
    let existingTodo = state.todos.find(t => (t.id===todo.id))
    let args = { id: todo.id}
    if (todo.value) args.value = todo.value
    if (todo.done !== undefined) args.done = todo.done
    return getClient().request(UPDATE_TODO_MUTATION, args)
      .then((data) => {
        let newTodos = state.todos.map(t =>
          t.id==data.updateTodo.id
            ? Object.assign({},data.updateTodo)
            : t)
        actions.setTodos(newTodos)
      })
  },
  delete: (state, actions, id) => {
    console.log('dql',state)
    return getClient().request(DELETE_TODO_MUTATION, {id})
      .then(() => {
        let newTodos = state.todos.filter(t => t.id!==id)
        actions.setTodos(newTodos)
      })
  }
}

const DELETE_TODO_MUTATION = `
mutation deleteTodo($id: String!){
  deleteTodo(id: $id)
}
`

const UPDATE_TODO_MUTATION = `
mutation updateTodoMutation($id: String!, $value: String, $done: Boolean){
  updateTodo(id: $id, value: $value, done: $done) {
    id
    value
    done
  }
}
`

const ADD_TODO_MUTATION = `
mutation addTodoMutation($value: String!){
  addTodo(value: $value) {
    id
    value
    done
  }
}
`

const ALL_TODOS_QUERY = `
{
  allTodos {
    id
    value
    done
  }
}
`
