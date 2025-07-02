import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";


const MyTaskList = () => {

    const { state } = useContext(TaskContext);    
    const [filterArray, setFilterArray] = useState([]);

    useEffect(() => {
        setFilterArray(state.tasks.filter((task) => task.user === state.userLogged.user));        
    }, []);


    console.log(state);
    console.log(filterArray);

    return(<div className="w-xl h-96 border p-4">
        <span className="text-lg block text-center font-semibold ">Mis tareas</span>
        <div>
            {filterArray.map((task) => {
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

export default MyTaskList;