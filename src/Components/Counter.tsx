import React, {useState} from "react";
import style from './Counter.module.css'
import {Buttons} from "./Bottons";

const Counter = () => {
    const startValue = 0
    const finishValue = 5


    const [count, setCount] = useState(startValue)

    const incrementCount = () => {
        count < finishValue ? setCount(prevState => prevState + 1) : setCount(startValue)
        }

    const resetCount = () => {
        setCount(startValue)
    }

    const counterType = count === finishValue ? style.counterStop : style.counter

    return (
        <div>
            <div className={`${style.counter} ${counterType}`}>
                {count}
            </div>
            <Buttons
                incrementCount={incrementCount}
                count={count}
                startValue={startValue}
                finishValue={finishValue}
                resetCount={resetCount}/>
        </div>
    )
}

export default Counter