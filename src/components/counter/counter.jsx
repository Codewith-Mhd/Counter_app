import {Component} from "react"
//import "./styles.css"

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn m-2 btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    )
  }
  formateCount() {
    const {value} = this.props.counter
    return value === 0 ? <h5>Zero</h5> : value
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.props.counter.value === 0 ? "warning" : "primary"
    return classes
  }
}

export default Counter
