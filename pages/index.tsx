import type { NextPage } from 'next'
import Counter from './Counter'
import CounterContext from '../Context/Counter/CountProvider';

const Home: NextPage = ({children}) => {
  return (
      <Counter />
  )
}

export default Home
