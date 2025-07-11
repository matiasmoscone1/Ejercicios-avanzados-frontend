import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const UserFilter = ({ openPopUpFilter, handleFilterState }) => {

    const { dispatch } = useContext(TaskContext);

    return(<div className="w-xs h-20 flex justify-center items-center gap-4">
        <input placeholder="Nombre de usuario" type="text" className="p-2 border border-gray-500 rounded-md" 
        name="user" onChange={(e) => handleFilterState(e)}/>
        <button className="p-2 pl-4 pr-4 border border-gray-500 rounded-md 
        cursor-pointer hover:bg-gray-200/60" onClick={() => {dispatch({type: "CHANGE_FILTER_STATE_REF", payload: "Usuario"}); openPopUpFilter()}}>Filtrar</button>
    </div>)
}
export default UserFilter;