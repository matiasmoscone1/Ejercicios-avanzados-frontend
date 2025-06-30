import { useReducer } from "react";
import { createContext } from "react"
import reducer from "../reducer/reducer";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const users = [{username: "matias", password: "1234"}, {username: "userprueba", 
    password: "hola123"}, {username: "userprueba2", password: "hola1234"}];

    const initialState = {
        userLogged: null,

    }

    const [state, dispatch] = useReducer(reducer, initialState);



    return(<TaskContext.Provider value={{ 
        state,
    }}>
    { children }
    </TaskContext.Provider>)

}

export default TaskContextProvider;
