import { useContext } from "react";
import { useRef } from "react";
import { TaskContext } from "../../context/TaskContext";


const PopUpFilter = () => {

    const { dispatch } = useContext(TaskContext);
    const popUpFilterRef = useRef();

    const closePopUpFilter = (e) => {
        if(popUpFilterRef.current && !popUpFilterRef.current.contains(e.target)){
            dispatch({type: "POPUP_FILTER", payload: false});
        }
    }

    return(<div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUpFilter(e)}>
        <div className="w-7/10 h-9/10 bg-white border border-gray-500 rounded-md shadow-lg p-4 relative" ref={popUpFilterRef}>


        </div>
    </div>)

}
export default PopUpFilter;