import { useContext } from "react";
import "../index.scss";
import { ContextUsers } from "../components/ContextProvider";
import { useEffect } from "react";

const ComponentUsers = () => {

    const { users, fetchUsers } = useContext(ContextUsers);

    useEffect(() => {
        fetchUsers();
    }, [users]);
    console.log(users);

    return(<>

        <h2>asd</h2>
    </>)

}
 

export default ComponentUsers;
