import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        {/* 90c4ae998b224e70b56d86838db54f76 */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}
