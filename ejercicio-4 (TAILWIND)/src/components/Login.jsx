import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const { state, users, dispatch } = useContext(TaskContext);
    const [userLog, setUserLog] = useState({});

    const handleUser = (e) => {
        setUserLog({...userLog, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        users.map((user) => {
            if(user.username === userLog.user && user.password === userLog.pass){
                dispatch({type: "SAVE_USER", payload: userLog});
            }
        });
    }

    return(<>
    <div className="w-screen h-screen flex justify-center items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="h-[300px] w-xl flex flex-col justify-center items-center
            gap-8 m-auto border rounded-md">
                <div className="flex flex-col gap-3 w-md">
                    <input className="text-center border p-2 rounded-md" name="user" placeholder="Nombre de usuario" type="text" required onChange={(e) => handleUser(e)}/>
                    <input className="text-center border p-2 rounded-md" name="pass" placeholder="Contraseña" type="password" required onChange={(e) => handleUser(e)}/>
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