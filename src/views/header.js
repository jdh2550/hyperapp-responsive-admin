/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import { Link } from "@hyperapp/router"

export const Header = () => {

  function toggle() {
    let sidebar = document.getElementById("mySidebar")
    let overlay = document.getElementById("myOverlay")
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none"
        overlay.style.display = "none"
    } else {
        sidebar.style.display = "block"
        overlay.style.display = "block"
    }

  }

  return (
    <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
      <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick={toggle}><i class="fa fa-bars"></i> Menu</button>
      <span class="w3-bar-item w3-right">Hyperapp Admin</span>
    </div>
  )

}
