import {h} from 'hyperapp'

export const Login = ({state, actions, mode}) => {

  let isLogin = state.modal.active==='login'
  let isCreate = state.modal.active==='createaccount'
  let style = (isLogin || isCreate) ? { display: 'block' } : { display: 'none'}
  if (!state.modal.message) {
    let form = document.getElementById("login-form")
    if (form) form.reset()
  }

  function handleLogin(result) {
    if (result.success)
      actions.modal.close()
    else
      actions.modal.setMessage(result.message)
  }

  function doSubmit(e) {
    let name = e.target.form['name'].value
    let email = e.target.form['email'].value
    let password  = e.target.form['pswd'].value
    let rememberMe  = e.target.form['remember'].checked
    if (isLogin && email && password) {
      actions.user.login({email,password,rememberMe})
        .then((loginResult) => handleLogin(loginResult.result))
    }
    else if (isCreate && email && password && name) {
       actions.user.createaccount({name,email,password,rememberMe})
        .then((loginResult) => handleLogin(loginResult.result))
    }
  }

  function forgotPassword() {
    window.alert("Shame on you for forgetting your password.\n\nNothing I can do about it!")
    actions.closeModal()
  }

  return (
    <div class="w3-container">
      <div class="w3-modal" style={style}>
        <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">

          <form id="login-form" class="w3-container" onsubmit={()=>false}>
            <div class="w3-section">
              { isCreate===true &&
                <div>
                  <label><b>Name</b></label>
                  <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Name" name="name" required />
                </div>
              }
              <label><b>Email</b></label>
              <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Email" name="email" required />
              <label><b>Password</b></label>
              <input class="w3-input w3-border" type="password" placeholder="Enter Password" name="pswd" required />
              <button class="w3-button w3-block w3-green w3-section w3-padding" onclick={doSubmit}>
                { isCreate===true && "Create Account"}
                { isLogin===true && "Login"}
              </button>
              {state.modal.message && <div class="w3-center">{state.modal.message}</div>}
              <input class="w3-check w3-margin-top" type="checkbox" checked="checked" name="remember"/> Remember me
            </div>
          </form>

          <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button onclick={()=>actions.modal.close()} type="button" class="w3-button w3-red">Cancel</button>
            {isLogin===true && <span class="w3-right w3-padding w3-hide-small"><a href="#" onclick={forgotPassword}>Forgot password?</a></span>}
          </div>

        </div>
      </div>
    </div>
  )
}
