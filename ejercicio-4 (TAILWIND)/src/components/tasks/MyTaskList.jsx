import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";


const MyTaskList = () => {

    const { state, dispatch } = useContext(TaskContext);    
    const [filterArray, setFilterArray] = useState([]);
    const [signTooltip, setSignTooltip] = useState(false);

    useEffect(() => {
        setFilterArray(state.tasks.filter((task) => task.user === state.userLogged.user));        
    }, [state.tasks]);

    return(<div className="w-full max-h-[75vh] border rounded-sm p-4">
        <div className="flex justify-between items-center">
            <span className="text-lg block text-center font-semibold w-full">Mis tareas</span>
            <button className="mr-4 font-semibold text-3xl cursor-pointer transition-transform duration-300 
            hover:scale-150" title="Agregar tarea" onClick={() => dispatch({type: "TOGGLE_ADD_TASK_FLAG", payload: {flag: !state.flagTask.flag, task: "myTask"}})}>+</button>
        </div>
        <div>
            {filterArray.map((task) => {
                return(<div key={task.id} className="p-2 flex justify-center items-center gap-2 border-b relative">
                    <span className="w-40 truncate" title={task.user}>{task.user}</span>
                    <span className="text-sm w-60 truncate group">{task.title}
                    <div className="w-100 h-10 justify-center items-center absolute top-5 left-50 border bg-white rounded-sm hidden group-hover:flex z-50">{task.title}</div></span>
                    <span className="text-sm w-60 truncate group">{task.description}
                    <div className="w-120 h-10 justify-center items-center absolute top-5 left-50 border bg-white rounded-sm hidden group-hover:flex z-50">{task.description}</div></span>
                    <span>{task.date}</span>
                    <span>{task.state === "pendiente" ? <input type="checkbox" /> : <input type="checkbox" checked/> }</span>
                
                </div>)
            })}
        </div>
    </div>)

}

export default MyTaskList;