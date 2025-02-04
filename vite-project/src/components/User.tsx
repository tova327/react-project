import { useState } from "react"
import Login from "./login"
import UserName from "./userName"
import NewUser from "./NewUser"


const User=()=>{
      const [isLogin,setIsLogin]=useState(false)

    return(<>
    
      {!isLogin&&<Login setLogedIn={setIsLogin}/>}
      {isLogin&&<UserName/>}
      {!isLogin&&<NewUser setLogedIn={setIsLogin}/>}
    </>)
}

export default User