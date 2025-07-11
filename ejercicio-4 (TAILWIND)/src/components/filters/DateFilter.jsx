import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const DateFilter = ({ openPopUpFilter, handleFilterState }) => {

    const { dispatch } = useContext(TaskContext);

    return(<div className="w-2xs h-20 flex justify-center items-center gap-4">
        <input type="date" className="p-2 border border-gray-500 rounded-md" 
        name="date" onChange={(e) => handleFilterState(e)}/>
        <button className="p-2 pl-4 pr-4 border border-gray-500 rounded-md 
        cursor-pointer hover:bg-gray-200/60" onClick={() => {dispatch({type: "CHANGE_FILTER_STATE_REF", payload: "Fecha"}); openPopUpFilter()}}>Filtrar</button>
    </div>)
}
export default DateFilter;