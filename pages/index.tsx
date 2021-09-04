import type { NextPage } from 'next'
import { useReducer, useState, createContext, useContext } from 'react'
import { IndexContext, indexInitialState, indexReducer } from '../reducer/indexReducer'
import Counter from './Counter'
import { CounterState } from './counterTypes'

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(indexReducer, indexInitialState);
  const value = {state, dispatch}
  return (
    <IndexContext.Provider value={value}>
      <Counter/>
    </IndexContext.Provider>
  )
}

export default Home
