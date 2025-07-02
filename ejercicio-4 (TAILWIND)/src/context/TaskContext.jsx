import { useReducer } from "react";
import { createContext } from "react"
import reducer from "../reducer/reducer";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const users = [{username: "matias", password: "hola1234"}, {username: "userprueba", 
    password: "asd1234"}, {username: "userprueba2", password: "asdasdasd"}];

    const initialState = {
        userLogged: null,

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return(<TaskContext.Provider value={{ 
        state,
        users,
        dispatch,

    }}>
    { children }
    </TaskContext.Provider>)

}

export default TaskContextProvider;
