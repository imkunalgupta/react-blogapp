import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import NoMatch from './NoMatch';
import IndivisualArticle from './IndivisualArticle';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/article/:slug" component={IndivisualArticle} />
          <Route path="*" exact>
            <NoMatch />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
