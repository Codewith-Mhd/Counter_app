import {Component} from "react"
import Counter from "../counter/counter"

class Counters extends Component {
  render() {
    // it's a destruturing
    const {onDelete, onReset, counters, onIncrement} = this.props
    return (
      <div style={{margin: "7px 0px 0px 20px"}}>
        <button className="btn btn-info btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            value={counter.value}
            selected={true}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    )
  }
}

export default Counters
