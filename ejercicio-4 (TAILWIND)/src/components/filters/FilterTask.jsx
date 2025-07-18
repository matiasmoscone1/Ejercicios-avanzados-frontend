import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import UserFilter from "./UserFilter";
import DateFilter from "./DateFilter";
import StateFilter from "./StateFilter";
import UserProfile from "../UserProfile";
import PopUpFilter from "./PopUpFilter";
import { useState } from "react";

const FilterTask = () => {

    const { state, dispatch } = useContext(TaskContext);

    const openPopUpFilter = () => {
        dispatch({type: "POPUP_FILTER", payload: true});
    }

    const handleFilterState = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({type: "FILTER_STATE", payload: { [name]: type === "checkbox" ? checked : value} });
    }

    console.log(state.filterState);

    return(
    <div className="flex justify-between items-center">
         <div className="flex justify-center items-center gap-8 w-full">
            <UserFilter openPopUpFilter={openPopUpFilter} handleFilterState={handleFilterState}/>
            <div className="h-20 border-r border-gray-400"></div>
            <StateFilter openPopUpFilter={openPopUpFilter} handleFilterState={handleFilterState}/>
            <div className="h-20 border-r border-gray-400"></div>
            <DateFilter openPopUpFilter={openPopUpFilter} handleFilterState={handleFilterState}/>
        </div>
         <UserProfile />
         {state.flagFilter && <PopUpFilter />}
    </div>);
}
export default FilterTask;