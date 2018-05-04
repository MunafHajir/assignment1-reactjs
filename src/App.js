import React, { Component } from 'react';
import './App.css';
import Userinput from './Component/Userinput';
import Useroutput from './Component/Useroutput';
import './ass.css'
class App extends Component {
  state = {
    username : "Coder"
  };

  stateHandler = (newUser) => {
    this.setState(
      {username : newUser}
    )
  }

  changeHandler = (event) => {
    this.setState(
      {username : event.target.value}
    )
  }
  render() {
    const style = {
      
    }
    return (
      <div className="design">
        <Userinput name = {this.state.username} change = {this.changeHandler}/>
        <Useroutput username = {this.state.username} />
        <button onClick = {this.stateHandler.bind(this,"iAS")}>Change Username</button>

      </div>
    );
  }
}

export default App;
