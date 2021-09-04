
import { createContext, useState, Dispatch } from 'react'
import { CounterState } from '../pages/counterTypes'
import { CounterAction } from '../pages/counterActionTypes'

export const IndexContext = createContext<
  {
    state: CounterState,
    dispatch: Dispatch<{type:CounterAction;payload:unknown}>
  }
  | undefined
>(undefined);

export const indexInitialState: CounterState = {
    text: '기본값',
    count: 0
  }
  
export const indexReducer = (state: CounterState, action: { type: CounterAction }) => {
  switch(action.type){
    case 'changeToKor': {
      return {
        ...state,
        text: '안녕하세요.'
      }
    }
    case 'changeToEng': {
      return {
        ...state,
        text: 'Hello.'
      }
    }
    case 'minusCount': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    case 'plusCount': {
      return {
        ...state,
        count: state.count + 1
      }
    }
  }
}