import { useContext } from "react";
import { CountContext } from "./CountContextProvider";


const ComponentA = () => {

    const { state, dispatch } = useContext(CountContext);

    return(<>
    <span>{state.count}</span>
        <div className="component-items">
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    </>)
}

export default ComponentA;

