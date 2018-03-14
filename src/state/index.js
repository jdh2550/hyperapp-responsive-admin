import {location} from "@hyperapp/router"

let todos = {
  input: '',
  placeholder: 'Add new todo',
  todos: []
}

export const state = {
  todos,
  location: location.state,
  modal: null,
}
