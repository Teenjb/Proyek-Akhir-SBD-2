import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import './index.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
          </Routes>
       </Router>
   );
  }
}
 
export default App;