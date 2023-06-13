'use client'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from '../../redux/counterSlice'
const Home = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    console.log(counter);
    return (
        <main className=''>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <hr />
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <hr />
                <button onClick={() => dispatch(reset())}>Reset</button>
                <hr />
                <span>{counter}</span>
            </div>
        </main>
    )
}
export default Home