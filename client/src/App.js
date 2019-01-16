import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import _ from "lodash"
import * as moment from 'moment'

// import logo from './logo.svg';
import './App.css';

import ChartPh from './components/chart-ph';
import ValuePh from './components/value-ph';

const serverUrl = process.env.REACT_APP_SERVER_URL

const socket = openSocket(serverUrl)
socket.on('connect', function () { 
  // console.log('[socket]: connected')
})

socket.on('data-update-ph', function (message) { 
  dataRealTime.y = message.value
  dataRealTime.x = message.timestamp
})

const style = {
  chart: {
    height: '200px',
    width: 'auto',
    position: 'relative'
  },
  content: {
    width: '80%',
    padding: 20
  }
}

const charts = [
  {
    name: 'Last Minute',
    durationMs: 60000,
    sampleRateMs: 500,
    dataHistorical: []
  },
  {
    name: 'Last 2 Hours',
    durationMs: 7200000,
    sampleRateMs: 30000,
    dataHistorical: []
  },
  {
    name: 'Last 24 Hours',
    durationMs: 86400000,
    sampleRateMs: 300000,
    dataHistorical: []
  }
]
var dataRealTime = {}

class App extends Component {

  parseChartData(chart, data) {
    const keyMap = {
      value: 'y',
      timestamp: 'x'
    }
    // filter & sort by duration
    chart.dataHistorical = _.filter(data, function(n) {
      return moment(n.timestamp).isAfter(moment().subtract(chart.durationMs, 'milliseconds'))
    })
    chart.dataHistorical = _.sortBy(chart.dataHistorical, ['timestamp'])
    // sample
    var sampleTimestamp = chart.dataHistorical[0].timestamp
    chart.dataHistorical = _.filter(chart.dataHistorical, function(n) {
      if (moment(n.timestamp).isSameOrAfter(moment(sampleTimestamp))) {
        sampleTimestamp += chart.sampleRateMs
        return true
      }
      else return false
    })
    // map keys so it can be rendered in chart
    chart.dataHistorical = chart.dataHistorical.map(function(obj) {
      return _.mapKeys(obj, function(value, key) {
        return keyMap[key];
      });
    })
    // remove data from memory
    data = null
    return chart
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      serverError: false
    }
  }

  componentDidMount() {
    const _this = this
    axios.get(serverUrl + '/historicals/ph')
      .then(function (response) {
        const data = response.data
        // if no data
        if (!data) { }
        else if (data.length === 0) { }
        else {
          charts.forEach(function(chart) {
            chart = _this.parseChartData(chart, data)
          })
        }
        return _this.setState({loading:false})
      })
      .catch(function (error) {
        console.log(error)
        _this.setState({serverError:true})
        return _this.setState({loading:false})
      })
  }

  render() {
    let content
    if (this.state.loading === true) {
      content = <div>
                  <MoonLoader
                    color={'#36D7B7'}
                    />
                </div>
    }
    else if (this.state.serverError === true) {
      content = <div>
                  Server Unreachable
                  <br/>
                  <br/>
                  Try Reloading App
                </div>
    }
    else {
      let chartHtml = charts.map((chart) =>
        <div key={chart.name}>
          <h6>{chart.name}</h6>
          <div style={style.chart}>
            <ChartPh 
              dataHistorical={chart.dataHistorical}
              dataRealTime={dataRealTime} 
              duration={chart.durationMs} 
              refresh={chart.sampleRateMs}/>
          </div>
        </div>
      )
      content = <div style={style.content}>
        <h2>PH</h2>
        <ValuePh dataRealTime={dataRealTime}/>
        {chartHtml}
      </div>
    }

    return (
      <div className="App">
        <main className="App-main">
          {content}
        </main>
      </div>
    );
  }
}

export default App;
