import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent, useRef, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Input, TextField } from '@mui/material';
import { mainUserContext } from './userReducer';

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

export default function Login({f}:{f:Function}) {
    const {state:cuser,dispatch:cuserDispatch}=React.useContext(mainUserContext)
    const [showLogin,setShowLogin]=useState(true)
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        
        
        
        e.preventDefault()
        console.log(pnameRef.current?.value);
        
        console.log(cuser);
        setShowLogin(false)
        
        if(pnameRef.current?.value!==cuser.pName
            ||fnameRef.current?.value!==cuser.fName
            ||emailRef.current?.value!==cuser.email
            ||passwordRef.current?.value!==cuser.password
            ||phoneRef.current?.value!==cuser.phone
            ||addressRef.current?.value!==cuser.adress){
                cuserDispatch({
                    type:'CREATE_USER',
                    data:{
                        pName: '',
                        fName: '',
                        phone: '',
                        email: '',
                        password: '',
                        adress: ''
                    }
                })
        }
        
        
        console.log(cuser);
         if (pnameRef.current?.value) pnameRef.current.value = ''
         if (fnameRef.current?.value) fnameRef.current.value = ''
         if (phoneRef.current?.value) phoneRef.current.value = ''
         if (addressRef.current?.value) addressRef.current.value = ''
         if (passwordRef.current?.value) passwordRef.current.value = ''
         if (emailRef.current?.value) emailRef.current.value = ''
         f()
         handleClose()
    }

    const pnameRef = useRef<HTMLInputElement>(null)
    const fnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    
    // addToList({
    //     name: nameRef.current?.value,
    //     phone: phoneRef.current?.value
    // })
    // if (nameRef.current?.value) nameRef.current.value = ''
    // if (phoneRef.current?.value) phoneRef.current.value = ''
    return (
        <div>
            {showLogin&&<Button onClick={handleOpen}>Login</Button>}
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Log in // please fill:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                        <form onSubmit={ handlesubmit}>
                        {/* <FormLabel>private name: <Input type='text' ref={pnameRef} /></FormLabel> */}
                        <TextField margin='normal'  id="pname" label="private name" variant="outlined"  inputRef={pnameRef} required/> 

                        {/* <FormLabel>family name: <Input type='text' ref={fnameRef} /></FormLabel> */}
                        <TextField margin='normal' id="fname" label="family name" variant="outlined"  inputRef={fnameRef} required/>  

                        {/* <FormLabel>adress: <Input type='text' ref={addressRef} /></FormLabel> */}
                        <TextField margin='normal' id="adress" label="adress" variant="outlined"  inputRef={addressRef} required /> 

                        {/* <FormLabel>email: <Input type='text' ref={emailRef} /></FormLabel> */}
                        <TextField margin='normal' id="email" label="email" variant="outlined"  inputRef={emailRef} required/> 

                        {/* <FormLabel>password: <Input type='text' ref={passwordRef} /></FormLabel> */}
                        <TextField margin='normal' id="password" label="password" variant="outlined" type='password'  inputRef={passwordRef} required/> 

                        {/* <FormLabel>phone: <Input type='text' ref={phoneRef} /></FormLabel> */}
                        <TextField margin='normal' id="phone" label="phone" variant="outlined"  inputRef={phoneRef} required/> 
                        <div>
                        <Button type='submit'>send</Button>
                        </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}