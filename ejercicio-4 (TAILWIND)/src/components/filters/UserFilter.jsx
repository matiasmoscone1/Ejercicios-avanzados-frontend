
const UserFilter = ({ openPopUpFilter, handleFilterState }) => {


   
    return(<div className="w-xs h-20 flex justify-center items-center gap-4">
        <input placeholder="Nombre de usuario" type="text" className="p-2 border border-gray-500 rounded-md" 
        name="username" onChange={() => {}}/>
        <button className="p-2 pl-4 pr-4 border border-gray-500 rounded-md 
        cursor-pointer hover:bg-gray-200/60" onClick={() => openPopUpFilter()}>Filtrar</button>
    </div>)
}
export default UserFilter;