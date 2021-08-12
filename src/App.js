import React, { Component } from 'react';
import FirstComponent from './components/learningexamples/FirstComponent';
import SecondComponent from './components/learningexamples/SecondComponent';
import ThirdComponent from './components/learningexamples/ThirdComponent';
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        Hello World! HI THERE
        <FirstComponent></FirstComponent>
        <SecondComponent/>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
