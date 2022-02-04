import React from "react";
import Counter from "./counter";
import {CounterType} from "../types"

type Props = {
  onReset: Function,
  counters:CounterType[],
  onDelete: Function,
  onIncrement : Function,
  onDecrement: Function,
  onAddCounter: Function,
  onDeleteAll: Function,
  onLike: Function,
};

const Counters:React.FC<Props> = ({counters,onReset,onAddCounter,onDeleteAll,onDelete,onIncrement,onDecrement,onLike}) => {
    console.log(counters);
    return (
      <div>
        <button
          onClick={() => onReset()}
          className="btn btn-danger btn-lg"
          disabled={!counters.filter((c) => c.value > 0).length}
        >
          Reset all
        </button>
        <button onClick={() =>onAddCounter()} className="btn btn-primary btn-lg m-2">
          Add counter
        </button>
        <button
          onClick={() =>onDeleteAll()}
          className="btn btn-danger btn-lg"
          disabled={!counters.length}
        >
          Delete all
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onLike={onLike}
            counter={counter}
            key={counter.id}
          >
            <span className="badge bg-secondary bbg-lg m-2">
              id: {counter.id}
            </span>
          </Counter>
        ))}
      </div>
    );
  
}

export default Counters;
