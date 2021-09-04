import React, { createContext, useContext } from 'react'
import { IndexContext, indexInitialState, indexReducer } from '../reducer/indexReducer'

const CounterTemplate = () => {
    return (
        <>
            <button>한글</button>
            <button>English</button>
            <div>123</div>
            <button>+</button>
            <button>-</button>
            <div>123</div>
        </>
    )
}


export default CounterTemplate;