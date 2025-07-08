import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const UserProfile = () => {

    const { state } = useContext(TaskContext);

    return(<div className="w-40 h-25 flex flex-col justify-center items-center gap-2">
        <img src="./public/images/default-avatar-prueba.png" className="w-16 h-16 rounded-full"/>
        <span className="font-semibold">{state.userLogged.user}</span>
    </div>)

}
export default UserProfile;