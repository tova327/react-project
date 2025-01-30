import { useEffect, useReducer, useState } from "react"
import userReducer, { Usertype, dispatchContext, mainUserContext } from "./userReducer"
import Login from "./login"
import UserName from "./userName"
import NewUser from "./reg.login.update"


const User=()=>{
    const defaultUser:Usertype={
        id:0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: ''
      }
    const [cuser,userDispatch]=useReducer(userReducer,defaultUser)
    const [showUsername,setShowUsername]=useState(false)
    const handleShowUsername=()=>setShowUsername(true)

      
      
    return(<>
    
    {/* <mainUserContext.Provider value={{state:cuser,dispatch:userDispatch}}> */}
      <Login />
      <UserName/>
      <NewUser/>
    {/* </mainUserContext.Provider> */}
    </>)
}

export default User