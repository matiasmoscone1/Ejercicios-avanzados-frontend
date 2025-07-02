import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const Dashboard = () => {

    const { state } = useContext(TaskContext);


    return(
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-5xl h-screen border">
            <div className="p-2 m-10 border">
                filtros
            </div>
            <div className="p-4 m-10 grid grid-cols-2 grid-rows-1 border">

            </div>
        </div>
    </div>)

}
export default Dashboard;