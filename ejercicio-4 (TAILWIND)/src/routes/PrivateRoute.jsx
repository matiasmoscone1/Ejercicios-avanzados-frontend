import { useContext } from "react";
import Dashboard from "../components/Dashboard";
import { TaskContext } from "../context/TaskContext";

const PrivateRoute = () => {

    const { state } = useContext(TaskContext);

    if(!(state.userLogged !== null)){
        
    }

    return(<>
        <Dashboard />
    </>);

}
export default PrivateRoute;