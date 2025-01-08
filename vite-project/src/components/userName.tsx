import { Avatar, Paper, styled } from "@mui/material"
import UpdateDetails from "./updateDetails"
import { deepOrange, yellow } from "@mui/material/colors"
import { useContext } from "react"
import { mainUserContext } from "./userReducer"
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    width:100,
    padding:20
    //lineHeight: '60px',
  }));
const UserName=()=>{
    const {state:cuser,dispatch:cuserdispatch}=useContext(mainUserContext)

    return(<>
    
    <Item>
        <div>
        <Avatar sx={{ bgcolor: yellow[200] }} variant="square">
        {cuser.pName?.length>0&&cuser.pName[0].toUpperCase()}
        </Avatar>
        {cuser.pName}
        <span>  </span>
          {cuser.fName}
        </div>
    </Item>
    
    <UpdateDetails/>
    
    
    </>)
}

export default UserName