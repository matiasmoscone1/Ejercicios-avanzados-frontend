import { useContext } from "react";
import { ContextUsers } from "./ContextProvider";


const EditComponent = () => {

    const { handleSubmit, handleInput } = useContext(ContextUsers);

  
    return(<div className="popup-create">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Id</label>
            <input type="text" name="id" onChange={(e) => handleInput(e)}/>
            <label>Name</label>
            <input type="text" name="name" onChange={(e) => handleInput(e)}/>
            <label>Username</label>
            <input type="text" name="username" onChange={(e) => handleInput(e)}/>
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => handleInput(e)}/>
            <label>Phone</label>
            <input type="number" name="phone" onChange={(e) => handleInput(e)}/>
            <button type="submit">Send</button>
        </form>
    </div>)

}

export default EditComponent;