import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const Login = () => {

    const { state } = useContext(TaskContext);


    return(<>
        <div className="">
            <div>
                <input placeholder="Nombre de usuario" type="text"/>
                <input placeholder="Contraseña" type="text"/>
            </div>
            <div>
                <button>Iniciar sesión</button>
            </div>
        </div>
    </>)

}

export default Login;