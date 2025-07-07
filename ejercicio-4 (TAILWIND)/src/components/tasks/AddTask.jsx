import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



const AddTask = () => {

    const { state, dispatch } = useContext(TaskContext);
    const popUpRef = useRef();
    const closeBtnRef = useRef();


    const closePopUp = (e) => {
        if(popUpRef.current && !popUpRef.current.contains(e.target) || closeBtnRef.current.contains(e.target)){
            dispatch({type: "CLOSE_POPUP", payload: false});
        }
    }
    
    return(
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUp(e)}>
        <div className="w-[70vw] h-[60vh] bg-white border-gray-500 rounded-md shadow-lg p-4 relative" ref={popUpRef}>
            <button className="w-5 rounded-md bg-red-500 text-white cursor-pointer absolute top-0 right-0" ref={closeBtnRef}>X</button>

        </div>
    </div>)
   


}
export default AddTask;