import {location} from "@hyperapp/router"
import {todoActions} from './todos-actions'
import {userActions} from './user-actions'
import {modalActions} from './modal-actions'


export const actions = {
  location: location.actions,
  todos: todoActions,
  user: userActions,
  modal: modalActions,
}
