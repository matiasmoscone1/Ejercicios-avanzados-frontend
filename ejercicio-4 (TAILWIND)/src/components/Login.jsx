import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const Login = () => {

    const { state } = useContext(TaskContext);


    return(<>
    <div>
        <div className="h-[300px] w-xl flex flex-col justify-center items-center 
        gap-8 m-auto border rounded-md">
            <div className="flex flex-col gap-2 w-md">
                <input className="text-center border p-2 rounded-md" placeholder="Nombre de usuario" type="text"/>
                <input className="text-center border p-2 rounded-md" placeholder="Contraseña" type="text"/>
            </div>
            <div className="flex flex-col w-md">
                <button className="border p-2 rounded-md">Iniciar sesión</button>
            </div>
        </div>
    </div>
    </>)

}

export default Login;