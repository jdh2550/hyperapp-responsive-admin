import {h} from 'hyperapp'
import {Route,Switch} from "@hyperapp/router"

import {SummaryPage}  from './summary-page'
import {TodoListPage} from './todo-list-page'


export const Routes = ({state, actions}) => (
  <Switch>
    <Route path="/"      render={SummaryPage} />
    {state.user.token && <Route path="/todos" render={()=>TodoListPage({state,actions})} />}
    <Route render={FourOhFourPage} />
  </Switch>
)

const FourOhFourPage = () => (
  <pre>The world's ugliest 404 page</pre>
)
