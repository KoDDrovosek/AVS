import React, { Component } from 'react';
import Header from './Pages/Header/Header';
import Start from './Pages/Start/Start';


class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Start/>
      </div>
    )
  }
}

export default App;
