import { useContext } from "react";
import { ContextUsers } from "./ContextProvider";


const NewEditComponent = () => {

    const { handleSubmitNew, handleInput, inputValue } = useContext(ContextUsers);

  
    return(<div className="popup-create">
        <form onSubmit={(e) => handleSubmitNew(e)}>
            <label>Id</label>
            <input type="text" name="id" value={inputValue.id}  onChange={(e) => handleInput(e)}/>
            <label>Name</label>
            <input type="text" name="name" value={inputValue.name} onChange={(e) => handleInput(e)}/>
            <label>Username</label>
            <input type="text" name="username" value={inputValue.username} onChange={(e) => handleInput(e)}/>
            <label>Email</label>
            <input type="email" name="email" value={inputValue.email} onChange={(e) => handleInput(e)}/>
            <label>Phone</label>
            <input type="number" name="phone" value={parseInt(inputValue.phone)} onChange={(e) => handleInput(e)}/>
            <button type="submit">Send</button>
        </form>
    </div>)

}

export default NewEditComponent;