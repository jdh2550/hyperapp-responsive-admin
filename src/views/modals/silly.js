import {h} from 'hyperapp'

export const Silly = ({state, actions, mode}) => {

  let style = state.modal.active==='silly' ? { display: 'block' } : { display: 'none'}
  return (
    <div class="w3-container">
      <div class="w3-modal" style={style}>
        <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">

          <h1>This is a silly modal</h1>
          <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button onclick={()=>actions.modal.close()} type="button" class="w3-button w3-red">Cancel</button>
          </div>

        </div>
      </div>
    </div>
  )
}
