import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react"
import reducer from "../reducers/reducer";

export const ContextUsers = createContext();

const ContextProvider = ({ children }) => {

    const initialState = {
        array: []
    };

    const [users, dispatch] = useReducer(reducer, initialState);



    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({type: "READ_USERS", payload: data});
    }

    


    return(<ContextUsers.Provider value={{ users, fetchUsers }}>
        { children }
    </ContextUsers.Provider>);

}

export default ContextProvider;
