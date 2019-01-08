import React, { Component } from 'react';

class ValuePh extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 'N/A'
    }
  }

  updateValue() {
    this.setState((state, props) => ({
      value: props.data.y
    }))
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateValue(),
      1000
    )
  }

  render() {
    return (
        <div>
          {this.state.value}
        </div>
    );
  }
}

export default ValuePh;
