import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Input, TextField } from '@mui/material';
import { MainUserContext } from './userReducer';
import axios from 'axios';

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

export default function Login({setLogedIn}:{setLogedIn:Function}) {
    const {state:cuser,dispatch:cuserDispatch}=useContext(MainUserContext)
    const [showLogin,setShowLogin]=useState(true)
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlesubmit = async(e: FormEvent<HTMLFormElement>) => {
      
        e.preventDefault()
        
        
        
        try{

            const res=await axios.post('http://localhost:3000/api/user/login',
            {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            })

            cuserDispatch({
                type:'UPDATE_USER',
                data:{...res.data.user}
            })
            setShowLogin(false)
            handleClose()
            setLogedIn(true)
        }catch(e:any){
            console.log(e);
            if(e.status==401)
                alert("this user doesn't exist")
        }
    }

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    return (
        <div>
            
            {showLogin&&<Button style={{color: 'white',border:'1px solid white'}} onClick={handleOpen}>sign in</Button>}
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        sign in // please fill:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                        <form onSubmit={ handlesubmit}>
                       
                        <TextField margin='normal' id="email" label="email" variant="outlined" type='email' inputRef={emailRef} required/> 

                        <TextField margin='normal' id="password" label="password" variant="outlined" type='password'  inputRef={passwordRef} required/> 

                        <div>
                        <Button type='submit'>send</Button>
                        </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}