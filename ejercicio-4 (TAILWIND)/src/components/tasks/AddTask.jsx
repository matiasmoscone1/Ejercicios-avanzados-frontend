import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



const AddTask = () => {

    const { state, dispatch } = useContext(TaskContext);
    const popUpRef = useRef();
    const closeBtnRef = useRef();

    console.log(state);

    const closePopUp = (e) => {
        if(popUpRef.current && !popUpRef.current.contains(e.target) || closeBtnRef.current.contains(e.target)){
            dispatch({type: "CLOSE_POPUP", payload: false});
        }
    }
    
    return(<>
        {state.flagTask.flag && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50" onClick={(e) => closePopUp(e)}>
            <div className="w-[70vw] h-[70vh] bg-white border-gray-500 rounded-md shadow-lg p-4 relative" ref={popUpRef}>
                <button className="w-5 rounded-md bg-red-500 text-white cursor-pointer absolute top-0 right-0" ref={closeBtnRef}>X</button>
                {state.flagTask.task === "myTask" 
                ? <div className="flex flex-col justify-center items-center gap-8">
                    <span className="font-bold text-2xl mb-6">Agregar tarea propia</span>
                    {/*<label className="font-semibold">Titulo</label>*/}
                    <input placeholder="Titulo" type="text" required className="pl-2 pr-2 w-lg border rounded-sm"/>
                    {/*<label className="font-semibold">Descripción</label>*/}
                    <textarea placeholder="Descripción" className="pl-2 pr-2 w-lg h-24 border resize-none rounded-sm" required/>

                    <label className="font-semibold">Fecha limite</label>
                    <input type="date" required className="pl-2 pr-2 w-lg border rounded-sm"/>

                    <button className="px-4 py-1 bg-green-300 rounded-md border border-green-400 cursor-pointer hover:bg-green-400/70">Aceptar</button>

                </div> 
                : <div>asdasd</div>}
                
            </div>
        </div>
    )}</>)
   


}
export default AddTask;