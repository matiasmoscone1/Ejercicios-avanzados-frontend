import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import UserFilter from "./UserFilter";
import DateFilter from "./DateFilter";
import StateFilter from "./StateFilter";
import UserProfile from "../UserProfile";
import PopUpFilter from "./PopUpFilter";

const FilterTask = () => {

    const { state, dispatch } = useContext(TaskContext);

    const popUpFilter = () => {
        dispatch({type: "POPUP_FILTER", payload: true});
    }

    return(
    <div className="flex justify-between items-center">
         <div className="flex justify-center items-center gap-8 w-full">
            <UserFilter popUpFilter={popUpFilter} />
            <div className="h-20 border-r border-gray-400"></div>
            <StateFilter popUpFilter={popUpFilter}/>
            <div className="h-20 border-r border-gray-400"></div>
            <DateFilter popUpFilter={popUpFilter} />
        </div>
         <UserProfile />
         {state.flagFilter && <PopUpFilter />}
    </div>);
}
export default FilterTask;