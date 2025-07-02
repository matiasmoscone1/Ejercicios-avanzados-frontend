import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";


const GlobalTaskList = () => {

    const { state } = useContext(TaskContext);


    return(<div className="w-full h-96 border p-4">
        <span className="text-lg block text-center font-semibold">Todas las tareas</span>
        <div>
            {state.tasks.map((task) => {
                return(<div key={task.id}>
                    <span>{task.user}</span>
                    <span>{task.title}</span>
                    <span>{task.description}</span>
                    <span>{task.date}</span>
                    <span>{task.state}</span>
                     
                </div>)
            })}
        </div>
    </div>)

}

export default GlobalTaskList;