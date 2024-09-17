import { useContext } from "react";
import { CountContext } from "./CountContextProvider";


const ComponentB = () => {

    const { state, dispatch } = useContext(CountContext);

    const ComponentD = () => {
        return(<>
            <div className="component-items">
                <button onClick={() => dispatch({type: "increment"})}>Increment</button>
                <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            </div>
        </>);
    }

    return(<>
        <ComponentD />
    </>)

}

export default ComponentB;

