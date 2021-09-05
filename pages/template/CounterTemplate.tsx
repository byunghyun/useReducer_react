import React, { createContext, useContext, Dispatch } from 'react'
import {CounterContext} from '../../Context/Counter/CountContext';
import {CounterState} from '../../Context/Counter/counterTypes';
import {CounterAction} from '../../Context/Counter/counterActionTypes';

const CounterTemplate = () => {
    const {
        state: { text, count },
      } = useContext(CounterContext);

    return (
        <>
            <button onClick={() => dispatch({type:'changeToKor', payload: '안녕하세요.'})}>한글</button>
            <button onClick={() => dispatch({type:'changeToEng', payload: 'hello'})}>English</button>
            <div>{state.text}</div>
            <button onClick={() => dispatch({type:'minusCount', payload: 1})}>+</button>
            <button onClick={() => dispatch({type:'plusCount', payload: -1})}>-</button>
            <div>{state.count}</div>
        </>
    )
}


export default CounterTemplate;
function dispatch(arg0: { type: string; payload: string; }): void {
    throw new Error('Function not implemented.');
}

