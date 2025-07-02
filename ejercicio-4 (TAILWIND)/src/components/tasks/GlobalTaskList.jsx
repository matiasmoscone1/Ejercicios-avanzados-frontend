import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";


const GlobalTaskList = () => {

    const { state } = useContext(TaskContext);


    return(<div className="w-full max-h-[75vh] overflow-y-auto border p-4">
        <span className="text-lg block text-center font-semibold">Todas las tareas</span>
        <div>
            {state.tasks.map((task) => {
                return(<div key={task.id} className="p-2 flex justify-center items-center gap-2 border-b">
                    <span>{task.user}</span>
                    <span className="text-sm w-40 truncate" title={task.title}>{task.title}</span>
                    <span className="text-sm w-80 truncate" title={task.description}>{task.description}</span>
                    <span>{task.date}</span>
                    <span>{task.state === "pendiente" ? <input type="checkbox" /> : <input type="checkbox" checked/> }</span>
                    
                </div>)
            })}
        </div>
    </div>)

}

export default GlobalTaskList;