import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import routes from './component/routes/routes';

function App() {
  return (
    <Fragment >
      <Router>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.component}
            </Route>)
          )}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
