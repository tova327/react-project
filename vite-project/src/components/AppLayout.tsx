import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import userReducer, { MainUserContext,Usertype } from "./userReducer"
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
    <MainUserContext value={{state:cuser,dispatch:userDispatch}}>
        <NavBar/>
        <Outlet/>
    
    </MainUserContext>
    </>)
}
export default AppLayout