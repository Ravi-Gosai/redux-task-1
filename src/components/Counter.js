import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { increment,decrement,toggle,increase } from '../store/index';

const Counter = () => {

  const counter = useSelector(state=> state.counter.counter)
  const show = useSelector(state=> state.counter.showCounter)
  const dispatch = useDispatch()
  // const toggleCounterHandler = () => {
  //   dispatch({type : 'toggle'})
  // };
  // const increaseHandler = ()=>{
  //   dispatch({type: 'increase',amount : 10})
  // }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{counter}</div>}
      <button onClick={()=>dispatch(toggle())}>Toggle Counter</button>
      <button onClick={()=>dispatch(increment())}> increment </button>
      <button onClick={()=>dispatch(decrement())}> derement </button>
      <button onClick={()=>dispatch(increase(10))}> increase by 10</button>
    </main>
  );
};

export default Counter;
