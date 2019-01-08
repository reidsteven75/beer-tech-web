import React, { Component } from 'react';
import openSocket from 'socket.io-client';

// import logo from './logo.svg';
import './App.css';

import ChartPh from './components/chart-ph';
import ValuePh from './components/value-ph';

const socket = openSocket('https://beer-tech-web-qa.herokuapp.com/')
// const socket = openSocket('http://localhost:3001')

var data = {}

socket.on('connect', function () { 
  console.log('[socket]: connected')
})

socket.on('data-update-ph', function (message) { 
  // console.log('[socket] data-update-ph: ', message)
  data.y = message.value
  data.x = message.timestamp
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <ValuePh data={data}/>
          <br/>
          <ChartPh data={data} duration={20000}/>
          <br/>
          <ChartPh data={data} duration={1000000}/>

        </header>
      </div>
    );
  }
}

export default App;
