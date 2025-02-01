import { useEffect, useReducer, useState } from "react"
import userReducer, { Usertype} from "./userReducer"
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
      const [isLogin,setIsLogin]=useState(false)

      
      
    return(<>
    
      {!isLogin&&<Login setLogedIn={setIsLogin}/>}
      {isLogin&&<UserName/>}
      {!isLogin&&<NewUser setLogedIn={setIsLogin}/>}
    </>)
}

export default User