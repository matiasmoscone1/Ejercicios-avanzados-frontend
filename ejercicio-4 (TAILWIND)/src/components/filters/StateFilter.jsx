
const StateFilter = ({ openPopUpFilter, handleFilterState }) => {


    return(<div className="w-2xs h-20 flex justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
            <span>Estado de la tarea</span>
            <input type="checkbox" className="p-2 w-6 h-6 cursor-pointer "/>
        </div>
        <button className="p-2 pl-4 pr-4 border border-gray-500 rounded-md cursor-pointer 
        hover:bg-gray-200/60" onClick={() => openPopUpFilter()}>Filtrar</button>
    </div>)
}
export default StateFilter;