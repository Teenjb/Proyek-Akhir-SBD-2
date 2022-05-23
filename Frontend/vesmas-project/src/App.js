import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import Register from './Register';
import Home from './Home';
import UserVehicle from './UserVehicle';
import ServiceRecord from './ServiceRecord';
import {ReactSession} from 'react-client-session';
import './index.css';
 
class App extends Component {
  render() {
    ReactSession.setStoreType("localStorage");
    return (
       <Router>
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/userVehicle' element={< UserVehicle />}></Route>
                 <Route exact path='/serviceRecord' element={< ServiceRecord />}></Route>
          </Routes>
       </Router>
   );
  }
}
 
export default App;