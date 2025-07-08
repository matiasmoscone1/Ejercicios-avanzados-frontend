import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



const AddTask = () => {

    const { state, dispatch } = useContext(TaskContext);
    const popUpRef = useRef();
    const closeBtnRef = useRef();
    const [newTask, setNewTask] = useState(
        {
            id: Date.now(),
            title: "",
            description: "",
            user: state.userLogged.user,
            state: "pendiente",
            date: "",
    });


    const resetNewTask = () => {
        setNewTask({
            id: Date.now(),
            title: "",
            description: "",
            user: state.userLogged.user,
            state: "pendiente",
            date: "",
    });
    }

    const closePopUp = (e) => {
        if(popUpRef.current && !popUpRef.current.contains(e.target) || closeBtnRef.current.contains(e.target)){
            dispatch({type: "CLOSE_POPUP", payload: false});
            resetNewTask();
        }
    }

    const handleNewTask = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.name === "date" 
        ? e.target.value.split("-").reverse().join("/")
        : e.target.value});
    }

    console.log(newTask);

    const addTask = () => {
        dispatch({type: "ADD_TASK", payload: newTask});
        dispatch({type: "CLOSE_POPUP", payload: false});
        resetNewTask();
    }

    

    return(<>
        {state.flagTask.flag && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUp(e)}>
            <div className="w-7/10 h-7/10 bg-white border border-gray-500 rounded-md shadow-lg p-4 relative" ref={popUpRef}>
                <button className="w-5 rounded-md bg-red-500 text-white cursor-pointer absolute top-0 right-0" ref={closeBtnRef}>X</button>
                {state.flagTask.task === "myTask" 
                ? <div className="flex flex-col justify-center items-center gap-8">
                    <span className="font-bold text-2xl mb-4">Agregar tarea propia</span>
                    <input placeholder="Titulo" type="text" required className="pl-2 pr-2 w-lg border rounded-sm" name="title" onChange={(e) => handleNewTask(e)}/>
                    <textarea placeholder="Descripción" className="pl-2 pr-2 w-lg h-24 border resize-none rounded-sm" required name="description" onChange={(e) => handleNewTask(e)}/>

                    <label className="font-semibold">Fecha limite</label>
                    <input type="date" required className="pl-2 pr-2 w-lg border rounded-sm" name="date" onChange={(e) => handleNewTask(e)}/>

                    <button className="px-4 py-1 bg-green-300 rounded-md border border-green-400 cursor-pointer hover:bg-green-400/70" onClick={() => addTask(newTask)}>Aceptar</button>

                </div> 
                : <div className="flex flex-col justify-center items-center gap-4">
                    <span className="font-bold text-2xl mb-2">Agregar tarea ajena</span>
                    <input placeholder="Titulo" type="text" required className="pl-2 pr-2 mb-2 w-lg border rounded-sm" name="title" onChange={(e) => handleNewTask(e)}/>
                    <textarea placeholder="Descripción" className="pl-2 pr-2 w-lg h-24 border resize-none rounded-sm" required name="description" onChange={(e) => handleNewTask(e)}/>

                    <label className="font-semibold">Nombre de usuario</label>
                    <input type="text" required className="pl-2 pr-2 w-lg border rounded-sm" name="user" onChange={(e) => handleNewTask(e)}/>
                    <label className="font-semibold">Fecha limite</label>
                    <input type="date" required className="pl-2 pr-2 w-lg border rounded-sm" name="date" onChange={(e) => handleNewTask(e)}/>

                    <button className="px-4 py-1 bg-green-300 rounded-md border border-green-400 cursor-pointer hover:bg-green-400/70" onClick={() => addTask(newTask)}>Aceptar</button>

                </div>
                }
                
            </div>
        </div>
    )}</>)
   


}
export default AddTask;