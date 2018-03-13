import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Start from './Pages/Start/Start';
import Auth from './Pages/Auth/Auth';
import Blogs from './Pages/Blogs/Blogs';
import Admin from './Pages/Admin/Admin';
import IB from './Pages/IB/IB';
import Footer from './Pages/Footer/Footer';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Start}/>
          <Route path="/posts" component={Blogs}/>
          <Route path="/about_ib" component={IB}/>
          <Route path="/admin" component={Admin}/>
          <Footer/>
        </div>
      </Router>
      // <div>
      //   <Admin/>
      // </div>
    )
  }
}

export default App;
