import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

export const CountContext = createContext();

export const CountContextProvider = ({ children }) => {

    const initialState = {
        count: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <CountContext.Provider value={{ state, dispatch }}>
            { children }
        </CountContext.Provider>
    );

}

