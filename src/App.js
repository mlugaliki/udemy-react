import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Martin', age : 30 },
      { name: 'Matt', age:15 },
      { name: 'Arthur', age:5 },
      { name: 'Lugaliki Baba', age : 71}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }/>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
        <Person name={ this.state.persons[3].name } age={ this.state.persons[3].age }> My hobbies are farming and driving</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now!!!'));
  }
}

export default App;
