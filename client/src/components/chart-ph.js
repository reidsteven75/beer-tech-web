import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

class ChartPh extends Component {

  render() {
    const _this = this
    const duration = this.props.duration
    const refresh = this.props.refresh
    const dataHistorical = this.props.dataHistorical

    var getLatestData = function() {
      var data = {
        x: _this.props.dataRealTime.x,
        y: _this.props.dataRealTime.y
      }
      return data
    }

    return (
          <Line
            data={{
              datasets: [{
                data: dataHistorical,
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
                    // suggestedMin: 4,
                    // suggestedMax: 10
                  }
                }],
                xAxes: [{
                  type: 'realtime',
                  realtime: {
                    duration: duration,
                    delay: 2000,
                    refresh: refresh,
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
