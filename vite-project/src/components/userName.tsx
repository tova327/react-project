import { Avatar, Chip, Stack } from "@mui/material"
import UpdateDetails from "./updateDetails"
import { useContext } from "react"
import { MainUserContext } from "./userReducer"

const UserName = () => {
  const { state: cuser } = useContext(MainUserContext)
  return (<>
        <Stack direction='row'>
        <Avatar sx={{ bgcolor: 'lightblue',margin:'10px'}}>
          { cuser.firstName?.length&&cuser.firstName?.length> 0 && cuser.firstName[0].toUpperCase()}
        </Avatar>
        <div>
        {cuser.firstName}
        <span>  </span>
        {cuser.lastName}
        <Chip label={cuser.email} variant="outlined" />
        </div>
        </Stack>
       <UpdateDetails />


  </>)
}

export default UserName