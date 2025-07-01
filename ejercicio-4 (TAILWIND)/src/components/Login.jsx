import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const Login = () => {

    const { state } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(<>
    <div className="w-screen h-screen flex justify-center items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="h-[300px] w-xl flex flex-col justify-center items-center
            gap-8 m-auto border rounded-md">
                <div className="flex flex-col gap-3 w-md">
                    <input className="text-center border p-2 rounded-md" placeholder="Nombre de usuario" type="text"/>
                    <input className="text-center border p-2 rounded-md" placeholder="Contraseña" type="password"/>
                </div>
                <div className="flex flex-col w-md">
                    <button className="p-2 rounded-md text-lg font-semibold text-white hover:text-black cursor-pointer bg-slate-500 hover:bg-slate-400">Iniciar sesión</button>
                </div>
            </div>
        </form>
    </div>
    </>)

}

export default Login;