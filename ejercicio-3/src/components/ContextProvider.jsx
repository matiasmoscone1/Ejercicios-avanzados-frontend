import { useReducer } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react"
import reducer from "../reducers/reducer";

export const ContextUsers = createContext();

const ContextProvider = ({ children }) => {

    const initialState = {
        array: []
    };

    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const [users, dispatch] = useReducer(reducer, initialState);
    
    const [flag, setFlag] = useState(false);
    const [flagEdit, setFlagEdit] = useState(false);


    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputValue({...inputValue, [name]:value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "CREATE_USER", payload: inputValue});
        setFlag(false);
        setInputValue({id: "",
        name: "",
        username: "",
        email: "",
        phone: ""});
    }

    const handleSubmitNew = (e) => {
        e.preventDefault();
        updateUser(inputValue);
        setFlagEdit(false);
        setInputValue({id: "",
        name: "",
        username: "",
        email: "",
        phone: ""});
    }

    const deleteUser = (id) => dispatch({type: "DELETE_USER", payload: id});

    const updateUser = (obj) => dispatch({type: "UPDATE_USER", payload: obj});

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({type: "READ_USERS", payload: data});
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    


    return(<ContextUsers.Provider value={{ users, flag, setFlag, handleInput, inputValue, 
    handleSubmit, deleteUser, updateUser, handleSubmitNew, flagEdit, setFlagEdit, setInputValue }}>
        { children }
    </ContextUsers.Provider>);

}

export default ContextProvider;
