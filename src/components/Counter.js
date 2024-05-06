import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state=> state.counter)
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch()

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={()=>dispatch({type: 'incrementby5'})}> increment by 5</button>
      <button onClick={()=>dispatch({type: 'decrementby5'})}> derement by 5</button>
    </main>
  );
};

export default Counter;
