import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const UserProfile = () => {

    const { state } = useContext(TaskContext);

    return(<div className="w-40 h-25 flex flex-col justify-center items-center gap-2">
        <img src="./public/images/default-avatar-prueba.png" className="w-16 h-16 rounded-full"/>
        <div className="flex justify-center items-center gap-4">
            <span className="font-semibold">{state.userLogged.user}</span>
            <img src="./public/images/close-session.png" className="w-5 h-5 rotate-180 cursor-pointer hover:scale-125 duration-300 hover:shadow-lg/80"></img>
        </div>
    </div>)

}
export default UserProfile;