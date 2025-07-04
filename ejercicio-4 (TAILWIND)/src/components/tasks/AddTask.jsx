import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



const AddTask = () => {

    const { state } = useContext(TaskContext);

    return(<div className="w-xl h-[70vh] bg-white-800 border sticky z-10">

    </div>)


}
export default AddTask;