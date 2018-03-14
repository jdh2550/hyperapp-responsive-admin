import {app}      from 'hyperapp'
import {location} from "@hyperapp/router"

import {actions} from './actions'
import {state}   from './state'
import {view}    from './views'

const main = app(state, actions, view, document.getElementById('app'))

const unsubscribe = location.subscribe(main.location)
