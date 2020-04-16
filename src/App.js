import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import AuthController from './controllers/AuthController';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this._authController = new AuthController();
  }

  render() {
    return (
      <AuthContext.Provider value={{ auth: this._authController }}>
        <BrowserRouter>
          <Link to='/login'>Login</Link>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }
}

export default App;
