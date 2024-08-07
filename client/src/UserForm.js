import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";   // react hook

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {

    //varible update
    const [id, setId] = useState(0);
    const [name, setName//update functon
        ] = useState("");

        useEffect(() =>{
            if(!submitted) {
                setId(0);
                setName('')
            }
        },[submitted]);


        useEffect(() =>{
            if(data?.id && data.id !== 0){
                setId(data.id);
                setName(data.name)
            }
        },[data]);

    return(
        <Grid //like div
            container
            spacing={3}
            sx={{ //like css part
                backgroundColor: '#ffffff',
                padding: '100px',
                display: 'block'
            }}   
        >

            <Grid item xs={8}> 
                <Typography component={'h1'}
                    sx={{
                        color:'#000000',
                        fontSize: '25px',
                        paddingLeft: '200px',
                        fontWeight: 'bold',
                        alignItems: 'center'
                    }}
                >User Form</Typography>
            </Grid>

                    <Grid item xs={12} sm={6} // extra small size - full screen, small type - half
                    sx={{display: 'flex'}} //display top to down with arrange align
                    >
                        <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color:'#000000',
                            marginRight: '20px',
                            fontSize: '20px',
                            width: '100px',
                            display: 'block',
                        }}>ID</Typography>
                        <Input
                            type='number' //called props(type, id, name)
                            id='id' //props
                            name= 'id' // props
                            sx={{
                                width:'400px'}}
                                value={id}
                                onChange={e => setId(e.target.value)} />
                    </Grid>

                    <Grid item xs={12} sm={6} // extra small size - full screen, small type - half
                    sx={{display: 'flex'}} 
                    >
                        <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color:'#000000',
                            marginRight: '20px',
                            fontSize: '20px',
                            width: '100px',
                            display: 'block',
                            paddingTop: '20px'
                        }}>Name</Typography>
                        <Input 
                            type='text'
                            id='name'
                            name= 'name'
                            sx={{
                                width:'400px'}}
                                value={name}
                                onChange={e => setName(e.target.value)} 
                                />
                    </Grid>

                    <Button
                        sx={{
                            alignItems: 'center',
                            margin: 'auto',
                            marginBottom: '20px',
                            backgroundColor: '#00c6c6',
                            color: '#000000',
                            maringLeft: '15px',
                            marginTop: '20px',
                            "&:hover":{
                                opacity: '0.7',
                                backgroundColor: '#00c6c6'
                            }
                        }}
                            onClick={() => isEdit ? updateUser({id,name}) : addUser({ id,name })}
                        >
                            {
                                isEdit ? 'Update' : 'Add'
                            }
                    </Button>
        </Grid>
    )
}

export default UserForm; // wena onama component eka idan me file eke function ekata cl karannna puluwan