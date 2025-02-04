import { Button, Modal, Box, Typography, TextField, Alert } from "@mui/material";
import axios from "axios";

import { FormEvent, useContext, useRef, useState } from "react";
import { MainUserContext } from "./userReducer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const NewUser=({setLogedIn}:{setLogedIn:Function})=>{

    const [error,setError]=useState("")
    const {state:cuser,dispatch:cuserDispatch}=useContext(MainUserContext)
    
      const [open, setOpen] =useState(false);
      
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    
   async function  handlesubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:3000/api/user/register',
                {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                }
                // { headers: {'user-id':'' + userID} }//only if the user in already login
            )

            //setUserId(res.data.userId)
            cuserDispatch({
                type:"CREATE_USER",
                data:{
                    id:res.data.userId,
                    email:emailRef.current?.value,
                    password:passwordRef.current?.value
                }
            })
            console.log(cuser);
            setLogedIn(true)
        
        } catch (e:any) {
            console.log(e);
            if (e.status === 400)
                setError("User already exists")
        }
        setOpen(false)
    }
    return (
        <div>
           {error.length>0&&<Alert severity="error">{error}</Alert>}
            <Button style={{color: 'white',border:'1px solid white'}} onClick={handleOpen}>sign up</Button>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>
                    x
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        sign up // please fill:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                        <form onSubmit={ handlesubmit}>
                        
                        <TextField margin='normal' id="email" label="email" variant="outlined" type="email" inputRef={emailRef} required/> 

                       
                        <TextField margin='normal' id="password" label="password" variant="outlined" type='password'  inputRef={passwordRef} required/> 

                       
                        <div>
                        <Button type='submit'>send</Button>
                        </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>)
}
export default NewUser