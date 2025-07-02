import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";


const GlobalTaskList = () => {

    const { state } = useContext(TaskContext);


    return(<div>
        <span></span>
    </div>)

}

export default GlobalTaskList;