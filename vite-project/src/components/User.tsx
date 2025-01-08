import { useEffect, useReducer, useState } from "react"
import userReducer, { Usertype, dispatchContext, mainUserContext } from "./userReducer"
import Login from "./login"
import UserName from "./userName"


const User=()=>{
    const defaultUser:Usertype={
        pName: 'toivi',
        fName: 'yakovson',
        email: 't@',
        password: '1234',
        adress: 'kushnir11',
        phone: '0548583500'
      }
    const [cuser,userDispatch]=useReducer(userReducer,defaultUser)
    const [showUsername,setShowUsername]=useState(false)
    const handleShowUsername=()=>setShowUsername(true)
//     useEffect(()=>     userDispatch({type:'UPDATE_USER',data:{pName:'www'}}) 

// ,[]    )
      
      
    return(<>
    
    <mainUserContext.Provider value={{state:cuser,dispatch:userDispatch}}>
      
      <Login f={handleShowUsername}/>
      {showUsername&&<UserName/>}
      
      
    </mainUserContext.Provider>
    
    </>)
}

export default User