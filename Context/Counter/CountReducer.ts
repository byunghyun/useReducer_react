import produce from 'immer';
import { isArray, isBoolean, isObject, isString, isNumber } from 'lodash';
import _ from 'lodash';
import { CounterState } from './counterTypes'
import { CounterAction } from './counterActionTypes'

export const CounterReducer = (state: CounterState, action: { type: CounterAction, payload: unknown }) => {
  return produce(state, (draft) => {
      switch(action.type){
        case 'SET_LANGUAGE': {
          if(isString(action.payload)) draft.text = action.payload;
        }
        case 'SET_COUNT': {
          if(isNumber(action.payload)) draft.count += action.payload;
        }
      }
    })
  }