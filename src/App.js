import React, {Component} from "react"
import "./styles.css"
import Counters from "././components/counters/counters"
import Navbar from "././components/Navbar/navbar"
export default class App extends Component {
  state = {
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 4}
    ]
  }

  incrementHandler = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    console.log(counters)
    this.setState({counters})
  }

  deleteHandler = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    this.setState({counters})
  }

  resetHandler = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      console.log(c)
      return c
    })
    this.setState({counters})
  }

  render() {
    return (
      <div className="App">
        <Navbar
          totaleCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="main">
          <Counters
            counters={this.state.counters}
            onIncrement={this.incrementHandler}
            onDelete={this.deleteHandler}
            onReset={this.resetHandler}
          />
        </div>
      </div>
    )
  }
}
