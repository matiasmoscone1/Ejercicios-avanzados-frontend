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
        switch(state.filterState.ref){
            case "Usuario":
                newArray = state.tasks.filter((task) => task.user === state.filterState.user);
                setFilterArray(newArray);
                break;
            case "Estado":
                newArray = state.tasks.filter((task) => state.filterState.state === (task.state === "completada" ? true : false));
                setFilterArray(newArray);
                break;
            case "Fecha":
                newArray = state.tasks.filter((task) => task.date === state.filterState.date.split("-").reverse().join("/"));
                setFilterArray(newArray);
                break;
            default:
                break;
        }

    }, [state.tasks, state.filterState]);

    console.log(filterArray);

    return(<div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUpFilter(e)}>
        <div className="w-7/10 h-9/10 p-4 bg-white border border-gray-500 rounded-md shadow-lg relative" ref={popUpFilterRef}>
                <span className="p-4 text-lg block font-semibold text-center">Tareas filtradas por {state.filterState.ref}</span>
                <div className="h-8/10 overflow-y-auto p-4">
                    {filterArray.map((task) => {
                        return(<div key={task.id} className="p-2 flex justify-center items-center gap-2 border-b">
                        <span className="mr-5 w-20 truncate" title={task.user}>{task.user}</span>
                        <span className="text-sm w-50 truncate" title={task.title}>{task.title}</span>
                        <span className="text-sm w-90 truncate" title={task.description}>{task.description}</span>
                        <span>{task.date}</span>
                        <span className="ml-10">{task.state === "pendiente" ? <input type="checkbox" /> : <input type="checkbox" checked/> }</span>
                    </div>)
                    })}
                </div>        
        </div>
    </div>)

}
export default PopUpFilter;