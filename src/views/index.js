/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

import {Header} from './header'
import {Sidebar} from './sidebar'
import {Footer} from './footer'
import {Routes} from './routes'
import {Modals} from './modals'

import {StateDisplay} from './components/state-display'

export const view = (state, actions) => (
  <div oncreate={()=>loadUser(actions)} ondestroy={()=>maybeRemoveUser(state)}>
    <Header />
    <Sidebar state={state, actions}/>
    <div class="w3-main" style={{marginLeft:"300px",marginTop:"43px"}}>
      <Routes state={state} actions={actions} />
      <Footer />
      <StateDisplay state={state} />
    </div>
    <Modals state={state} actions={actions} />
  </div>
)

function loadUser(actions) {
  let storedUser = window.localStorage.getItem("user")
  if (storedUser) {
    storedUser = JSON.parse(storedUser)
    if (storedUser.rememberMe===true) {
      actions.user.setUserFromToken(storedUser.token)
        .then((result) => {
          if (!result.success) {
            window.localStorage.removeItem("user")
          }
        })
    }
  }
}

function maybeRemoveUser(state) {
  if (state.user && !state.user.rememberMe)
    window.localStorage.removeItem("user")
  else if (!state.user)
    window.localStorage.removeItem("user")
}
