import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const Dashboard = () => {

    const { state } = useContext(TaskContext);


    return(<>
        <h1>dashboard</h1>
    </>)

}
export default Dashboard;