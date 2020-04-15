import React from 'react';
import Note from './components/Note';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: '',
      notes: []
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText: ''})
    }
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.slice(index, 1);
    this.setState({notes: notesArr})
  }

  addNote(){
    if(this.state.noteText === ''){return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''})
    this.textInput.focus();
  }

  render(){
    let notes = this.state.notes.map((key, value) => {
      return <Note key={key} text={key} deleteMethod={() => this.deleteNote(key)}/>
    })

    return (
      <div className="container">
        <div className="header">React TODO Application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
        <input type="text"
               ref={((input) => {this.textInput = input})}
               className="textInput"
               value={this.state.noteText}
               onChange={noteText => this.updateNoteText(noteText)}
               onPressKey={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }
}

export default App;
