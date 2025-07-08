import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const UserProfile = () => {

    const { state } = useContext(TaskContext);

    return(<div className="w-40 h-25 border">
        <img src="./public/images/default-avatar-prueba.png" className="w-16 h-16"/>
        <span></span>
    </div>)

}
export default UserProfile;