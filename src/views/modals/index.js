import {h} from 'hyperapp'
import {Login} from './login'
import {Silly} from './silly'

export const Modals = ({state, actions}) => (
  <div>
    <Login state={state} actions={actions}/>
    <Silly state={state} actions={actions}/>
  </div>
)
