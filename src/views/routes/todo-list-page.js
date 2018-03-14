/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const TodoListPage = ({state, actions}) => (
  <div class='container' oncreate={actions.todos.load}>
      <header class="w3-container" style={{paddingTop:"22px"}}>
        <h5><b><i class="fa fa-pencil"></i> My Todos</b></h5>
      </header>
      <div class="w3-row-padding w3-margin-bottom">
        <TodoList done={false} actions={actions} state={state} />
        <TodoInput state={state} actions={actions} />
        <h5><b>Completed Todos</b></h5>
        <TodoList done={true} actions={actions} state={state} />
      </div>
    </div>
)


const TodoList = ({state, actions, done}) => (
  state.todos.busy!==true ?
    state.todos.todos
      .filter(todo => todo.done===done)
      .map(todo => <TodoItem todo={todo} actions={actions}/>)
    : (<h4>Loading Todos ...</h4>)
)

const TodoInput = ({state, actions}) => (
  <div class='row'>
    <input
      type='text'
      oncreate={element => element.focus()}
      aria-label={state.todos.placeholder}
      onkeyup={({target: {value}, keyCode}) => keyCode === 13 && value !== '' ? actions.todos.add() : null}
      oninput={({target: {value}}) => actions.todos.input(value)}
      value={state.todos.input}
      placeholder={state.todos.placeholder} />
  </div>
)

const TodoItem = ({actions, todo}) => (
  <div class='w3-row'>
    <div class='w3-left'>
      <RemoveButton actions={actions} id={todo.id} />
      <ToggleButton actions={actions} id={todo.id} />
    </div>
    <div
      // Prevent extra <div> elements inserted in contenteditable
      onclick={e => {
        if (!todo.done) {
          e.target.contentEditable = true
          e.target.focus()
        }
      }}
      onkeydown={e => {
        if (e.keyCode === 13) {
          e.target.contentEditable = false
          actions.todos.editEnter(e)
        }
      }}
      data-uuid={todo.id}
      oninput={e => (todo.value = e.target.textContent || '')}
      onblur={e => actions.todos.edit(e)}>
      {todo.value}
    </div>
  </div>
)

const ToggleButton = ({id, actions}) => (
  <button
    aria-label='Toggle'
    class='button button-small button-outline'
    data-uuid={id}
    onclick={e => actions.todos.toggle(e)}>✓
  </button>
)

const RemoveButton = ({id, actions}) => (
  <button
    aria-label='Remove'
    class='button button-small button-outline'
    data-uuid={id}
    onclick={e => actions.todos.remove(e)}>x
  </button>
)
