import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const PrivateRoute = ({ element }) => {

    const { state } = useContext(TaskContext);
    const navigate = useNavigate();

    console.log(state);

    useEffect(() => {
        if(!state.userLogged.user && !state.userLogged.pass){
            navigate("/");
        }
    }, [state.userLogged]);

    return element;

}
export default PrivateRoute;