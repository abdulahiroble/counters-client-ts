import React from 'react'
// import Like from "./standard/like";
// import ICounter from "../models/counter"
import ICounter2 from "../models/counter2"
import Like2 from "./standard/like"

interface CounterProps {
    counter: ICounter2;
    onDecrement: Function;
    onIncrement: Function;
    onDelete: Function;
    onLike: Function;
}

const Counter: React.FunctionComponent<CounterProps> = (CounterProps) => {

    const disableDecrementButton = () => {
        return CounterProps.counter.value > 0 ? false : true;
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += CounterProps.counter.value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    const formatCount = () => {
        const {value} = CounterProps.counter;
        const zero = "Zero";
        return value === 0 ? zero : value;
    }

    const {onDecrement, onIncrement, onDelete, onLike, counter, children} = CounterProps

    return (
        <div>
            <h1>
                {children}
                <span className={getBadgeClasses()}>{formatCount()}</span>
                <button
                    disabled={disableDecrementButton()}
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
                <Like2 liked={counter.liked} onClick={(() => onLike(counter))} />
            </h1>
        </div>
    )
}

export default Counter