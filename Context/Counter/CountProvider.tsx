import React, { useReducer } from 'react';

import { CounterContext } from './CountContext';
import { CountInitialData } from './CountInitialData';
import { CounterReducer } from './CountReducer';

const CountProvider:React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, CountInitialData);
  const value = { state, dispatch };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CountProvider
