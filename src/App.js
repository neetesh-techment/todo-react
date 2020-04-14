import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: ''
    }
  }

  render(){
    return (
      <div className="container">
        <div className="header">React TODO Application</div>
        <div className="btn">+</div>
        <input type="text" ref={((input) => {this.textInput = input})} />
      </div>
    );
  }
}

export default App;
