import React, { Component } from "react";
import Like from "./standard/like";

class Counter extends Component {
  disableDecrementButton() {
    return this.props.counter.value > 0 ? false : true;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const zero = "Zero";
    return value === 0 ? zero : value;
  }

  render() {
    const { onDecrement, onIncrement, onDelete, onLike, counter, children } =
      this.props;

    return (
      <div>
        <h1>
          {children}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            disabled={this.disableDecrementButton()}
            onClick={() => onDecrement(counter)}
            className="btn btn-danger btn-lg"
          >
            -
          </button>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-success btn-lg m-2"
          >
            +
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-lg"
          >
            delete
          </button>
          <Like liked={counter.liked} onClick={() => onLike(counter)} />
        </h1>
      </div>
    );
  }
}

export default Counter;
