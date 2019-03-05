import React, { Component } from 'react'

class ValueSensor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  updateValue() {
    this.setState((state, props) => ({
      value: props.dataRealTime.y,
      unit: props.unit
    }))
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateValue(),
      1000
    )
  }

  render() {

    const value = this.state.value || 'unknown'
    const unit = this.state.unit 

    return (
        <div>
          {value} {unit}
        </div>
    );
  }
}

export default ValueSensor;
