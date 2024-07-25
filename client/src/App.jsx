import React, { Component } from 'react'
import openSocket from 'socket.io-client'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap'
// import * as moment from 'moment'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'
import red from '@material-ui/core/colors/red'

// import logo from './logo.svg';
import './App.css';

import ChartSensor from './components/chart-sensor'
import ValueSensor from './components/value-sensor'
import Help from './components/help'
// import { SlowBuffer } from 'buffer';

const serverUrl = process.env.SERVER_URL || 'http://localhost:3001'
console.log({serverUrl})

const theme = createMuiTheme({
  palette: {
    primary: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
  typography: {
    useNextVariants: true,
  }
})

const socket = openSocket(serverUrl)
socket.on('connect', function () { 
  // console.log('[socket]: connected')
})

socket.on('data-update', function (message) { 
  if (message.sensor === "PH") {
    dataRealTime.ph.y = message.value
    dataRealTime.ph.x = message.timestamp
  }
  else if (message.sensor === "TEMP") {
    dataRealTime.temp.y = message.value
    dataRealTime.temp.x = message.timestamp
  }
})

const style = {
  content: {
    width: '100%',
    padding: 20
  }
}

const charts = {
  ph: [
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
  ],
  temp: [
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
}
var dataRealTime = {
  ph: {},
  temp: {}
}

class App extends Component {

  mapChartData(chart) {
    const keyMap = {
      value: 'y',
      timestamp: 'x'
    }
    // map keys so it can be rendered in chart
    chart.dataHistorical = chart.dataHistorical.map(function(obj) {
      return _.mapKeys(obj, function(value, key) {
        return keyMap[key];
      });
    })
    return chart
  }

  getChartData(chart, sensor) {
    const _this = this
    console.log('---------', {serverUrl})
    return axios.get(serverUrl + '/historicals?sensor=' + sensor + '&duration=' + chart.durationMs + '&samplerate=' + chart.sampleRateMs)
      .then(function (response) {
        if (!response.data) { }
        else if (response.data.length === 0) { }
        else {
          chart.dataHistorical = response.data
          chart = _this.mapChartData(chart)
        }
        return ({chart:chart})
      })
      .catch(function (error) {
        console.log({err:error})
        return error
      })

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

    // App loading animation
    setTimeout(function() {
      _this.setState({loading:false})

      charts.ph.forEach(function(chart) {
        chart.isLoading = true
        _this.getChartData(chart, 'ph').then(function(res) {
          chart.isLoading = false
          _this.setState({updateData:true})
          if (res.err) { chart.isError = true }
          else { chart = res.chart }
        })
      })

      charts.temp.forEach(function(chart) {
        chart.isLoading = true
        _this.getChartData(chart, 'temp').then(function(res) {
          chart.isLoading = false
          _this.setState({updateData:true})
          if (res.err) { chart.isError = true }
          else { chart = res.chart }
        })
      })
    }, 1000)
  }

  render() {
    let content
    if (this.state.loading === true) {
      content = <div>
                  <MoonLoader
                    css={{boxSizing: 'content-box'}}
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
      let chartPhHtml = charts.ph.map((chart) =>
        <div key={chart.name}>
          <ChartSensor 
            isLoading={chart.isLoading}
            isError={chart.isError}
            title={chart.name}
            borderColor={'rgb(255, 99, 132)'}
            backgroundColor={'rgba(255, 99, 132, 0.5)'}
            dataHistorical={chart.dataHistorical}
            dataRealTime={dataRealTime.ph} 
            duration={chart.durationMs} 
            refresh={chart.sampleRateMs}/>
        </div>    
      )
      let chartTempHtml = charts.temp.map((chart) =>
        <div key={chart.name}>
          <ChartSensor 
            isLoading={chart.isLoading}
            isError={chart.isError}
            title={chart.name}
            borderColor={'rgb(152, 255, 152)'}
            backgroundColor={'rgba(152, 255, 152, 0.5)'}
            dataHistorical={chart.dataHistorical}
            dataRealTime={dataRealTime.temp} 
            duration={chart.durationMs} 
            refresh={chart.sampleRateMs}/>
        </div>    
      )
      content = <div style={style.content}>
      <Container>
        <Row>
          <Col sm={6}>
            <h2>PH</h2>
            <ValueSensor dataRealTime={dataRealTime.ph}/>
            <br/>
            {chartPhHtml}
          </Col>
          <Col sm={6}>
            <h2>TEMP</h2>
            <ValueSensor dataRealTime={dataRealTime.temp} unit={'°C'}/>
            <br/>
            {chartTempHtml}
          </Col>
        </Row>
      </Container>       
        <br/>
        <Help/>
        <br/>
      </div>
    }

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <main className="App-main">
            {content}
          </main>
        </div> 
      </MuiThemeProvider>
    )
  }
}

export default App;
