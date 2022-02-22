import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';
function App() {
  const {user,authIsReady}=useAuthContext();
  if(!authIsReady){
    return <></>
  }
  return (
    <div className="App">
      <BrowserRouter>
      {user && <Sidebar/>}
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              {!user && <Redirect to='/login'/>}
              {user &&<Dashboard />}
            </Route>
            <Route exact path='/login'>
              {user && <Redirect to='/'/>}
              {!user && <Login />}
            </Route>
            <Route exact path='/signup'>
              {user && <Redirect to='/'/>}
              {!user && <Signup />}
            </Route>
            <Route exact path='/create'>
            {!user && <Redirect to='/login'/>}
            {user && <Create />}
            </Route>
            <Route exact path='/projects/:id'>
            {!user && <Redirect to='/login'/>}
              {user && <Project />}
            </Route>

          </Switch>
        </div>
        {user && <OnlineUsers/>}
      </BrowserRouter>
    </div>
  );
}

export default App
