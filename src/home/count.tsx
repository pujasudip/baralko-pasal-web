import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../feature/counter/counterSlice";

const Count = () => {
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()
    const handleClickAdd = () => {
        dispatch(increment())
    }

    const handleClickSub = () => {
        dispatch(decrement())
    }
    return <>
        <div>{count}</div>
        <button onClick={handleClickAdd}>Add</button>
        <button onClick={handleClickSub}>Sub</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </>
}

export default Count;