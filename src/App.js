import React, { Component } from 'react';
import './App.css';
import InstructorApp from './Component/InstructorApp';
import ListCoursesComponent from './Component/ListCoursesComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <InstructorApp />
      </div>
    );
  }
}

export default App;
