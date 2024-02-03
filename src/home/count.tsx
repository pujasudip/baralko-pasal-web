import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../feature/counter/counterSlice";
import { useQuery } from '@tanstack/react-query';

const Count = () => {
    const count = useSelector((state: any) => state.counter.value)
    const { data, isLoading } = useQuery({
        queryKey: ['team-info'], queryFn: async (): Promise<any> => {
            fetch('http://localhost:8080/api/students').then(response => response.json()).then(res => console.log(res))
        }
    })
    const dispatch = useDispatch()
    const handleClickAdd = () => {
        dispatch(increment())
    }

    const handleClickSub = () => {
        dispatch(decrement())
    }

    console.log('sudip:', data)

    return <>
        <div>{count}</div>
        <button onClick={handleClickAdd}>Add</button>
        <button onClick={handleClickSub}>Sub</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </>
}

export default Count;