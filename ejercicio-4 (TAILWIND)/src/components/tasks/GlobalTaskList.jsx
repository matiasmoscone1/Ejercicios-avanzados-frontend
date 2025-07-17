import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

const GlobalTaskList = () => {

    const { state, dispatch } = useContext(TaskContext);

    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState("");
  
    const handleMouseEnter = (e, text) => {
        const rect = e.target.getBoundingClientRect();
        setTooltipPosition({
          top: rect.bottom + window.scrollY + 5,
          left: rect.left + window.scrollX - 500,
        });
        setTooltipText(text);
        setShowTooltip(true);
      };
    
      const handleMouseLeave = () => {
        setShowTooltip(false);
      };

    return(<div className="w-full max-h-[75vh] overflow-y-auto border rounded-sm p-4">
        <div className="flex justify-between items-center">
            <span className="text-lg block text-center font-semibold w-full">Todas las tareas</span>
            <button className="mr-4 font-semibold text-3xl cursor-pointer transition-transform duration-300 
            hover:scale-150" title="Agregar tarea" onClick={() => dispatch({type: "TOGGLE_ADD_TASK_FLAG", payload: {flag: !state.flagTask.flag, task: "globalTask"}})}>+</button>
        </div>
        <div>
            {state.tasks.map((task) => {
                return(<div key={task.id} className="p-2 flex justify-center items-center gap-2 border-b relative">
                    <span className="w-40 truncate" title={task.user}>{task.user}</span>
                    <span className="text-sm w-60 truncate group">{task.title}
                    <div className="w-100 h-10 justify-center items-center absolute top-5 left-50 border bg-white rounded-sm hidden group-hover:flex z-50">{task.title}</div></span>
                    <span className="text-sm w-60 truncate group" onMouseEnter={(e) => handleMouseEnter(e, task.description)}
                onMouseLeave={handleMouseLeave}
              >{task.description}</span>
                    <span>{task.date}</span>
                    <span>{task.state === "pendiente" ? <input type="checkbox" /> : <input type="checkbox" checked/> }</span>
                    
                </div>)
            })}
            {showTooltip && (
        <div
          className="absolute w-150 h-10 flex justify-center items-center bg-white border rounded-sm text-sm shadow-md z-50 break-words"
          style={{ top: tooltipPosition.top, left: tooltipPosition.left, position: "absolute" }}
        >
          {tooltipText}
        </div>
      )}
        </div>
    </div>)

}

export default GlobalTaskList;