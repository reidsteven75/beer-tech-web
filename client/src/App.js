import React, { Component } from 'react';
import openSocket from 'socket.io-client';

// import logo from './logo.svg';
import './App.css';

import ChartPh from './components/chart-ph';
import ValuePh from './components/value-ph';

const style = {
  chart: {
    height: '200px',
    width: '90%',
    position: 'relative'
  }
}

// const socket = openSocket('https://beer-tech-web-prod.herokuapp.com/')
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

          <h2>PH</h2>
          <ValuePh data={data}/>
          <h6>Last Minute</h6>
          <div style={style.chart}>
            <ChartPh data={data} duration={600000}/>
          </div>
          <h6>Last 2 Hours</h6>
          <div style={style.chart}>
            <ChartPh data={data} duration={7200000}/>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
