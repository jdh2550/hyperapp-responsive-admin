/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const SummaryPage = () => (
  <div>
    <header class="w3-container" style={{paddingTop:"22px"}}>
      <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
    </header>

    <div class="w3-row-padding w3-margin-bottom">
      <div class="w3-quarter">
        <div class="w3-container w3-red w3-padding-16">
          <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
          <div class="w3-right">
            <h3>52</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Foos</h4>
        </div>
      </div>
      <div class="w3-quarter">
        <div class="w3-container w3-blue w3-padding-16">
          <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
          <div class="w3-right">
            <h3>99</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Bars</h4>
        </div>
      </div>
      <div class="w3-quarter">
        <div class="w3-container w3-teal w3-padding-16">
          <div class="w3-left"><i class="fa fa-share-alt w3-xxxlarge"></i></div>
          <div class="w3-right">
            <h3>23</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Whees</h4>
        </div>
      </div>
      <div class="w3-quarter">
        <div class="w3-container w3-orange w3-text-white w3-padding-16">
          <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
          <div class="w3-right">
            <h3>50</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Whizzes</h4>
        </div>
      </div>
    </div>

    <div class="w3-panel">
      <div class="w3-row-padding" style={{margin:"0 -16px"}}>
        <div class="w3-half">
          <h5>Performance</h5>

        </div>
        <div class="w3-half">
          <h5>Notifications</h5>
          <table class="w3-table w3-striped w3-white">
            <tr>
              <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
              <td>New record, over 90 views.</td>
              <td><i>10 mins</i></td>
            </tr>
            <tr>
              <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
              <td>Database error.</td>
              <td><i>15 mins</i></td>
            </tr>
            <tr>
              <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
              <td>New record, over 40 users.</td>
              <td><i>17 mins</i></td>
            </tr>
            <tr>
              <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
              <td>New comments.</td>
              <td><i>25 mins</i></td>
            </tr>
            <tr>
              <td><i class="fa fa-bookmark w3-text-blue w3-large"></i></td>
              <td>Check transactions.</td>
              <td><i>28 mins</i></td>
            </tr>
            <tr>
              <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
              <td>CPU overload.</td>
              <td><i>35 mins</i></td>
            </tr>
            <tr>
              <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
              <td>New shares.</td>
              <td><i>39 mins</i></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <hr />
    <div class="w3-container">
      <h5>General Stats</h5>
      <p>Foos</p>
      <div class="w3-grey">
        <div class="w3-container w3-center w3-padding w3-green" style={{width:"25%"}}>+25%</div>
      </div>

      <p>Bars</p>
      <div class="w3-grey">
        <div class="w3-container w3-center w3-padding w3-orange" style={{width:"50%"}}>50%</div>
      </div>

      <p>Whees</p>
      <div class="w3-grey">
        <div class="w3-container w3-center w3-padding w3-red" style={{width:"75%"}}>75%</div>
      </div>
    </div>
    <hr />

    <div class="w3-container w3-dark-grey w3-padding-32">
      <div class="w3-row">
        <div class="w3-container w3-third">
          <h5 class="w3-bottombar w3-border-green">This</h5>
          <p>Language</p>
        </div>
        <div class="w3-container w3-third">
          <h5 class="w3-bottombar w3-border-red">That</h5>
          <p>Browser</p>
        </div>
        <div class="w3-container w3-third">
          <h5 class="w3-bottombar w3-border-orange">The Other</h5>
          <p>Users</p>
        </div>
      </div>
    </div>
  </div>
)
