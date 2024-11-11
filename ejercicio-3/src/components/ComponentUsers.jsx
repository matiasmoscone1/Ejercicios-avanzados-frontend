import { useContext } from "react";
import "../index.scss";
import { ContextUsers } from "../components/ContextProvider";
import EditComponent from "./EditComponent";
import NewEditComponent from "./NewEditComponent";

const ComponentUsers = () => {

    const { users, flag, setFlag, flagEdit, setFlagEdit, deleteUser, inputValue, updateUser, setInputValue } = useContext(ContextUsers);

    console.log(users);

    console.log(inputValue);

    return(<>
        {flag && <EditComponent />}
        {flagEdit && <NewEditComponent />}
        <div className="create-container">
            <button onClick={() => setFlag(true)}>Create User</button>
        </div>
        <div className="table-container">
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {users.array.map((user) => {
                        return(<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={() => {setInputValue({id: user.id, name: user.name, username: user.username, email: user.email, phone: user.phone }); setFlagEdit(true)}}>Edit</button></td>
                            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    </>)

}
 

export default ComponentUsers;
