import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { TaskContext } from "../../context/TaskContext";


const PopUpFilter = ( ) => {

    const { state, dispatch } = useContext(TaskContext);
    const popUpFilterRef = useRef();
    const [filterArray, setFilterArray] = useState([]);

    const closePopUpFilter = (e) => {
        if(popUpFilterRef.current && !popUpFilterRef.current.contains(e.target)){
            dispatch({type: "POPUP_FILTER", payload: false});
        }
    }

    useEffect(() => {
        let newArray = [];
        switch(state.filter.ref){
            case "Usuario": 
                newArray = state.tasks.filter((task) => task.user === state.filterState.user)
                setFilterArray(newArray);
                break;
            case "Estado": 
                newArray = state.tasks.filter((task) => task.user === state.filterState.user)
                setFilterArray(newArray);
                break;
            case "Fecha": 
                newArray = state.tasks.filter((task) => task.user === state.filterState.user)
                setFilterArray(newArray);
                break;
            default:
                break;
        }

        // if(state.filterState.ref === "Usuario"){
        //     const newArray = state.tasks.filter((task) => task.user === state.filterState.user)
        //     setFilterArray(newArray);
        // }
    }, []);

    console.log(filterArray);

    return(<div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUpFilter(e)}>
        <div className="w-7/10 h-9/10 bg-white border border-gray-500 rounded-md shadow-lg p-4 relative" ref={popUpFilterRef}>
            <span className="p-4 text-lg block font-semibold text-center">Tareas filtradas por {state.filterState.ref}</span>
            {filterArray.map((task) => {
                return(<div>
                    {task.user}
                    </div>)
            })}

        </div>
    </div>)

}
export default PopUpFilter;