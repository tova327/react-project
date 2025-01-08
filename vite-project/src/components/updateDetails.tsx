import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormEvent, useRef } from 'react';
import { TextField } from '@mui/material';
import { Usertype, mainUserContext } from './userReducer';

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

export default function UpdatDetails() {
    const {state:cuser,dispatch:cuserDispatch}=React.useContext(mainUserContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pnameRef = useRef<HTMLInputElement>(null)
    const fnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    
    const handlesubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(cuser);
        const data1:Partial<Usertype>={}
        if (pnameRef.current?.value!=='') {
            data1.pName=pnameRef.current?.value
        }
         if (fnameRef.current?.value!=='') data1.fName=fnameRef.current?.value
         if (phoneRef.current?.value!=='') data1.phone=phoneRef.current?.value
         if (addressRef.current?.value!=='')data1.adress=addressRef.current?.value
         if (passwordRef.current?.value!=='') data1.password=passwordRef.current?.value
         if (emailRef.current?.value!=='') data1.email=emailRef.current?.value
        
        cuserDispatch({type:'UPDATE_USER',data:data1})
        
         handleClose()
         console.log(cuser);

    }
  return (
    <div>
      <Button onClick={handleOpen}>Update User Details</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              update user // please fill
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={ handlesubmit}>
                        {/* <FormLabel>private name: <Input type='text' ref={pnameRef} /></FormLabel> */}
                        <TextField margin='normal'  id="pname" label="private name" variant="outlined"  inputRef={pnameRef} /> 

                        {/* <FormLabel>family name: <Input type='text' ref={fnameRef} /></FormLabel> */}
                        <TextField margin='normal' id="fname" label="family name" variant="outlined"  inputRef={fnameRef} />  

                        {/* <FormLabel>adress: <Input type='text' ref={addressRef} /></FormLabel> */}
                        <TextField margin='normal' id="adress" label="adress" variant="outlined"  inputRef={addressRef}  /> 

                        {/* <FormLabel>email: <Input type='text' ref={emailRef} /></FormLabel> */}
                        <TextField margin='normal' id="email" label="email" variant="outlined"  inputRef={emailRef} /> 

                        {/* <FormLabel>password: <Input type='text' ref={passwordRef} /></FormLabel> */}
                        <TextField margin='normal' id="password" label="password" variant="outlined" type='password'  inputRef={passwordRef} /> 

                        {/* <FormLabel>phone: <Input type='text' ref={phoneRef} /></FormLabel> */}
                        <TextField margin='normal' id="phone" label="phone" variant="outlined"  inputRef={phoneRef} /> 
                        <div>
                        <Button type='submit'>send</Button>
                        </div>
                        </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}