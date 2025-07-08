import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import MyTaskList from "./tasks/MyTaskList";
import GlobalTaskList from "./tasks/GlobalTaskList";
import AddTask from "./tasks/AddTask";
import FilterTask from "./filters/FilterTask";

const Dashboard = () => {

    const { state } = useContext(TaskContext);


    return(
    <div className="w-screen h-screen flex justify-center items-start overflow-x-hidden">
        <div className="w-screen h-screen border">
            <div className="max-w-screen h-28 p-4 mt-2 border">
                <FilterTask />
            </div>
            <div className="p-2 mt-2 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2">
                <MyTaskList />
                <GlobalTaskList />
            </div>
            
            {state.flagTask ? <AddTask /> : <></>}

            
        </div>
    </div>)

}
export default Dashboard;