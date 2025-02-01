import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormEvent, useRef } from 'react';
import { TextField } from '@mui/material';
import { Usertype, MainUserContext } from './userReducer';
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

export default function UpdatDetails() {
    const {state:cuser,dispatch:cuserDispatch}=React.useContext(MainUserContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    
    const handlesubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        //firstName, lastName, email, address, phone
        try{
          const res=await axios.put('http://localhost:3000/api/user/',{
            firstName:firstNameRef.current?.value==''?cuser.firstName:firstNameRef.current?.value,
            lastName:lastNameRef.current?.value==''?cuser.lastName:lastNameRef.current?.value,
            email:emailRef.current?.value==''?cuser.email:emailRef.current?.value,
            address:addressRef.current?.value==''?cuser.address:addressRef.current?.value,
            phone:phoneRef.current?.value==''?cuser.phone:phoneRef.current?.value

          }, { headers: {'user-id':'' + cuser.id} }
          )

          cuserDispatch({
            type:'UPDATE_USER',
            data:{...res.data}

          })


        }catch(e){
          console.log(e);
        }
        
        
         handleClose()
         console.log(cuser);

    }

    
  return (
    <div>
      <Button style={{color: 'white',border:'1px solid white',margin:'5px'}} onClick={handleOpen}>Update User Details</Button>
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
                        <TextField margin='normal'  id="firstName" label="private name" variant="outlined"  inputRef={firstNameRef} /> 

                        <TextField margin='normal' id="lastName" label="family name" variant="outlined"  inputRef={lastNameRef} />  

                        <TextField margin='normal' id="address" label="address" variant="outlined"  inputRef={addressRef}  /> 

                        <TextField margin='normal' id="email" label="email" variant="outlined"  inputRef={emailRef} /> 

                        <TextField margin='normal' id="password" label="password" variant="outlined" type='password'  inputRef={passwordRef} /> 

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