import { useContext } from "react";
import "../index.scss";
import { ContextUsers } from "../components/ContextProvider";
import EditComponent from "./EditComponent";

const ComponentUsers = () => {

    const { users, flag, setFlag, deleteUser } = useContext(ContextUsers);

    console.log(users);

    return(<>
        {flag && <EditComponent />}
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
                            <td><button>Edit</button></td>
                            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    </>)

}
 

export default ComponentUsers;
