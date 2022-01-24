import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory, History } from 'history';
import routers_string from './utilities/routers';
const HomePage = React.lazy(() => import('./pages/home'));

export const history: History = createBrowserHistory();

const App: React.SFC = () => (
  <Router history={history}>
    <React.Suspense fallback="loading...">
        <Switch>
          <Route exact={true} path={routers_string.HOME} component={HomePage} />
        </Switch>
    </React.Suspense>
  </Router>
);

export default App;
