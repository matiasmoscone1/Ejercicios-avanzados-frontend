import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import UserFilter from "./UserFilter";
import DateFilter from "./DateFilter";
import StateFilter from "./StateFilter";
import UserProfile from "../UserProfile";
import PopUpFilter from "./PopUpFilter";

const FilterTask = () => {

    const { state, dispatch } = useContext(TaskContext);

    const openPopUpFilter = () => {
        dispatch({type: "POPUP_FILTER", payload: true});
    }

    const closePopUpFilter = () => {
        if(ref){}
        dispatch({type: "CLOSE_POPUP_FILTER", payload: false});
    }

    return(
    <div className="flex justify-between items-center">
         <div className="flex justify-center items-center gap-8 w-full">
            <UserFilter openPopUpFilter={openPopUpFilter} closePopUpFilter={closePopUpFilter}/>
            <div className="h-20 border-r border-gray-400"></div>
            <StateFilter openPopUpFilter={openPopUpFilter} closePopUpFilter={closePopUpFilter}/>
            <div className="h-20 border-r border-gray-400"></div>
            <DateFilter openPopUpFilter={openPopUpFilter} closePopUpFilter={closePopUpFilter}/>
        </div>
         <UserProfile />
         {state.flagFilter && <PopUpFilter />}
    </div>);
}
export default FilterTask;