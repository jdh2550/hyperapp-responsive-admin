/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import { Link } from "@hyperapp/router"

export const Sidebar = ({state, actions}) => {

  function close() {
    let sidebar = document.getElementById("mySidebar")
    let overlay = document.getElementById("myOverlay")
    sidebar.style.display = "none"
    overlay.style.display = "none"
  }

  return (
  <div>
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style={{zIndex:3,width:"300px"}} id="mySidebar"><br />
      <div class="w3-container w3-row">
        {state.user.token ? <SignedIn user={state.user} actions={actions}/> : <LoginOrCreate actions={actions}/>}
      </div>
      <hr />
      <div class="w3-bar-block">
        <button class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick={close} title="close menu"><i class="fa fa-remove fa-fw"></i> Close Menu</button>
        <Link to="/" class={getClass(state, "/")}><i class="fa fa-dashboard fa-fw"></i> Summary</Link>
        {state.user.token && <Link to="/todos" class={getClass(state, "/todos")}><i class="fa fa-pencil fa-fw"></i> Todo List</Link>}
        <br /><br />
      </div>
    </nav>

    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick={close} style="cursor:pointer" title="close side menu" id="myOverlay"></div>
  </div>
)}

const SignedIn = ({user, actions}) => (
  <div class="w3-col s8 w3-bar">
    <span>Welcome, <strong>{user.name}</strong></span><br />
    <button onclick={()=>actions.modal.open("silly")} class="w3-bar-item w3-button"><i class="fa fa-user"/></button>
    <Link to="/settings" class="w3-bar-item w3-button"><i class="fa fa-cog"/></Link>
    <button onclick={()=>actions.user.logout()} class="w3-bar-item w3-button"><i class="fa fa-close"/></button>
  </div>
)

const LoginOrCreate = ({actions}) => (
  <div class="w3-col s8 w3-bar">
    <button class="w3-button" onclick={()=>actions.modal.open("login")}>Login</button>
    or
    <button class="w3-button" onclick={()=>actions.modal.open("createaccount")}>Create Account</button>
  </div>
)

const getClass = (state, link) => {
  let result = "w3-bar-item w3-button w3-padding"
  if (state.location && link===state.location.pathname)
    result += " w3-blue"
  return result
}
