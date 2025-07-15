import { useReducer } from "react";
import { createContext } from "react"
import reducer from "../reducer/reducer";
import taskData from "../data/database.json";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const users = [{username: "matias", password: "hola1234"}, {username: "userprueba", 
    password: "asd1234"}, {username: "userprueba2", password: "asdasdasd"}];

    const initialState = {
        tasks: taskData,
        userLogged: {
            user: window.sessionStorage.getItem("user"),
            pass: window.sessionStorage.getItem("pass")
        },            
        flagTask: {
            flag: false,
            task: ""
        },
        flagFilter: false,
        filterState: {
            user: "",
            state: false,
            date: "",
            ref: ""
        },
        flagSession: false,
        

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
