import { graphql } from "./graphql"

export const todoActions = {
  load: () => (state, actions) => {
    graphql.todos.getAll(actions)
    return {busy: true}
  },
  input: (value) => state => ({
    input: value
  }),
  editEnter: (e) => state => {
    e.preventDefault()
    e.target.blur()
  },
  add: () => (state, actions) => ({
    busy: true,
    input: '',
    todos: graphql.todos.add(state, actions)
  }),
  edit: (e) => (state, actions) => {
    let todo = state.todos.find(t => (t.id===e.target.dataset.uuid))
    todo.value = e.target.textContent
    return {
      busy: true,
      todos: graphql.todos.edit(state, actions, todo)
    }
  },
  toggle: (e) => (state, actions) => {
    let todo = state.todos.find(t => (t.id===e.target.dataset.uuid))
    todo.done = !todo.done
    return {
      busy: true,
      todos: graphql.todos.edit(state, actions, todo)
    }
  },
  remove: (e) => (state, actions) => ({
    busy: true,
    todos: graphql.todos.delete(state, actions, e.target.dataset.uuid)
  }),
  setTodos: (todos) => ({todos, busy: false}),
}
