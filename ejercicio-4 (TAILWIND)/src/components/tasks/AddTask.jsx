import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



const AddTask = () => {

    const { state } = useContext(TaskContext);

    
    return(
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
        <div className="w-[70vw] h-[60vh] bg-white border rounded-md shadow-lg p-4">

        </div>
    </div>)
   


}
export default AddTask;