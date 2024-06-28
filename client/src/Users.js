import { Box } from "@mui/material";
import UserForm from "./UserForm"
import UsersTable from "./UsersTable";

const users = [
{
    id: 1,
    name: 'Udari'
},
{
    id: 2,
    name: 'Isuru'
}
];
    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    };

const Users = () =>{ // functional component(Users)
    return(
    const addUser = (data) =>{
        setSubmited(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmited(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    }

    return (
        <Box
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px'
        }}>
        <UserForm />
        <UsersTable rows={users}/>
        </Box>
    );

}

export default Users //like export it default type