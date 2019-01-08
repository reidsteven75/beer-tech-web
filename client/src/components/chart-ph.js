import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

class ChartPh extends Component {

  render() {
    const _this = this
    const duration = this.props.duration

    var getLatestData = function() {
      var data = {
        x: _this.props.data.x,
        y: _this.props.data.y
      }
      return data
    }

    return (
          <Line
            data={{
              datasets: [{
                data: [],
                label: 'PH',
                pointRadius: 1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                lineTension: 0,
                // borderDash: [8, 4]
              }]
            }}
            options={{
              maintainAspectRatio: false,
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    // min: 0,
                    // max: 14
                  }
                }],
                xAxes: [{
                  type: 'realtime',
                  realtime: {
                    duration: duration,
                    delay: 2000,
                    refresh: 1000,
                    pause: false,
                    onRefresh: function(chart) {
                      var data = getLatestData()
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push(data)
                      })
                    },
                    
                  }
                }]
              }
            }}
            />
    );
  }
}

export default ChartPh;
