import React from "react"

class SecondCounterComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = (e) => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <ShowCountComponent count={this.state.count} />
        <button onClick={this.handleClick}>Plus 1</button>
      </div>
    )
  }
}

const ShowCountComponent = (props) => {
  return <h1>SecondCounter Count: {props.count}</h1>
}

export default SecondCounterComponent
