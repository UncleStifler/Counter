import React, {useState} from "react";
import style from './Counter.module.css'

type buttonsTypes = {
    incrementCount: () => void
    resetCount: () => void
    count: number
    startValue: number
    finishValue: number
}

export const Buttons = (props: buttonsTypes) => {

    return (
        <div className={style.buttons}>
            <button
                onClick={props.incrementCount}
                className={style.incButton}
                disabled={props.count === props.finishValue}>
                inc
            </button>
            <button onClick={props.resetCount}
                    className={style.resetButton}
                    disabled={props.count === props.startValue}>
                reset
            </button>
        </div>)
}

