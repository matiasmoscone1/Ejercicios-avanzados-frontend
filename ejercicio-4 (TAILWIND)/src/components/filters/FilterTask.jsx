import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import UserFilter from "./UserFilter";
import DateFilter from "./DateFilter";
import StateFilter from "./StateFilter";
import UserProfile from "../UserProfile";

const FilterTask = () => {

    const { state } = useContext(TaskContext);

    return(
    <div className="flex justify-between items-center">
         <div className="flex justify-center items-center gap-8 w-full">
            <UserFilter />
            <StateFilter />
            <DateFilter />
        </div>
         <UserProfile />        
    </div>);
}
export default FilterTask;