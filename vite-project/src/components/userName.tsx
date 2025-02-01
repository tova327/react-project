import { Avatar, Chip, Paper, Stack, styled } from "@mui/material"
import UpdateDetails from "./updateDetails"
import { deepOrange, yellow } from "@mui/material/colors"
import { useContext } from "react"
import { MainUserContext } from "./userReducer"
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  width: 100,
  padding: 20
  //lineHeight: '60px',
}));
const UserName = () => {
  const { state: cuser, dispatch: cuserdispatch } = useContext(MainUserContext)
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
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