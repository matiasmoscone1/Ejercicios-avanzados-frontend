import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react"
import reducer from "../reducer/reducer";
import taskData from "../data/database.json";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const users = [{username: "matias", password: "hola1234"}, {username: "userprueba", 
    password: "asd1234"}, {username: "userprueba2", password: "asdasdasd"}];

    const initialState = {
        tasks: null,
        userLogged: null,
        flagTask: {
            flag: false,
            task: ""
        },
        flagFilter: false,
        filterState: {
            user: "",
            state: false,
            date: ""
        },

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: "SAVE_TASKS", payload: taskData});
    }, []);

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
