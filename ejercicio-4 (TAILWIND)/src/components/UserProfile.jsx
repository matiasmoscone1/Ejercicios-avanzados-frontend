import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const UserProfile = () => {

    const { state, dispatch } = useContext(TaskContext);

    const refPopUp = useRef();

    const closePopUp = (e) => {
        if(refPopUp.current && !refPopUp.current.contains(e.target)){
            dispatch({type: "FLAG_SESSION", payload: false});
        }
    }


    return(<div className="w-40 h-25 flex flex-col justify-center items-center gap-2">
        <img src="./public/images/default-avatar-prueba.png" className="w-16 h-16 rounded-full"/>
        <div className="flex justify-center items-center gap-4">
            <span className="font-semibold">{state.userLogged.user}</span>
            <img src="./public/images/close-session.png" className="w-5 h-5 rotate-180 cursor-pointer hover:scale-125 duration-300 fill-white hover:drop-shadow" 
            onClick={() => dispatch({type: "FLAG_SESSION", payload: true})}></img>
        </div>
        {state.flagSession && <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUp(e)}>
            <div className="w-1/3 h-1/3 bg-white rounded-md flex flex-col justify-between items-center" ref={refPopUp}>
                <span className="flex-1 flex justify-center items-center">¿Seguro desea cerrar la sesión?</span>
                <div className="mb-4 flex justify-center items-center gap-4">
                    <button>Salir</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>}
    </div>)

}
export default UserProfile;