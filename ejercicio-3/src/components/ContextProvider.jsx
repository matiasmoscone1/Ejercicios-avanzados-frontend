import { useReducer } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react"
import reducer from "../reducers/reducer";

export const ContextUsers = createContext();

const ContextProvider = ({ children }) => {

    const initialState = {
        array: []
    };

    const [users, dispatch] = useReducer(reducer, initialState);
    
    const [flag, setFlag] = useState(false);


    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({type: "READ_USERS", payload: data});
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    


    return(<ContextUsers.Provider value={{ users, flag, setFlag }}>
        { children }
    </ContextUsers.Provider>);

}

export default ContextProvider;
