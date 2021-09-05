import { Dispatch, createContext } from 'react';

import { CounterState } from './counterTypes';

import { CounterAction } from './counterActionTypes';

export const CounterContext = createContext<
  | {
      state: CounterState;
      dispatch: Dispatch<{ type: CounterAction; payload: unknown }>;
    }
  | any
>(undefined);