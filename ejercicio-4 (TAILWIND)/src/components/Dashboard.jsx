import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import MyTaskList from "./tasks/MyTaskList";
import GlobalTaskList from "./tasks/GlobalTaskList";

const Dashboard = () => {

    const { state } = useContext(TaskContext);


    return(
    <div className="w-screen h-screen flex justify-center items-center overflow-x-hidden">
        <div className="w-screen h-screen border">
            <div className="max-w-screen p-2 mt-10 border">
                filtros
            </div>
            <div className="p-2 mt-10 grid grid-cols-1 md:grid-cols-2 grid-rows-1 border gap-2">
                <MyTaskList />
                <GlobalTaskList />
            </div>
        </div>
    </div>)

}
export default Dashboard;