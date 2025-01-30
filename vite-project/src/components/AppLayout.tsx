import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import FullRecipe from "./fullRecipe"
import userReducer, { mainUserContext, Usertype } from "./userReducer"
import { useReducer } from "react"

const AppLayout=()=>{
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

    return(<>
    <mainUserContext.Provider value={{state:cuser,dispatch:userDispatch}}>
        <NavBar/>
        <Outlet/>
    
    </mainUserContext.Provider>
    </>)
}
export default AppLayout