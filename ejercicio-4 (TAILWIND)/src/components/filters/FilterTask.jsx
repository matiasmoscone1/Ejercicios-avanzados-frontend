import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import UserFilter from "./UserFilter";


const FilterTask = () => {

    const { state } = useContext(TaskContext);

    return(<div className="flex justify-center items-center">
        <UserFilter />
        {/*<StateFilter />
        <DateFilter />*/}
    </div>);
}
export default FilterTask;