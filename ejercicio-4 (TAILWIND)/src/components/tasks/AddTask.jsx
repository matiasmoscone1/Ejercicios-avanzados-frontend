import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



const AddTask = () => {

    const { state, dispatch } = useContext(TaskContext);
    const popUpRef = useRef();


    const closePopUp = (e) => {
        if(popUpRef.current && !popUpRef.current.contains(e.target)){
            dispatch({type: "CLOSE_POPUP", payload: false});
        }
    }
    
    return(
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUp(e)}>
        <div className="w-[70vw] h-[60vh] bg-white border rounded-md shadow-lg p-4" ref={popUpRef}>

        </div>
    </div>)
   


}
export default AddTask;