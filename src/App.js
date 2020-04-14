import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: ''
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  render(){
    return (
      <div className="container">
        <div className="header">React TODO Application</div>
        <div className="btn">+</div>
        <input type="text"
               ref={((input) => {this.textInput = input})}
               className="textInput"
               value={this.state.noteText}
               onChangeText={noteText => this.updateNoteText(noteText)} />
      </div>
    );
  }
}

export default App;
