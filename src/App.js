import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {

  constructor(){
    super();
    this.state={
      projects:[
        {
          title:'Business',
          category:'Web Design'
        },
        {
          title:'Social App',
          category:'Mobile Development'
        },
        {
          title:'E-commerce Shopping Website',
          category:'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My React App
       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
