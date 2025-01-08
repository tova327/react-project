import { createContext, Dispatch } from "react"

export type Usertype = {

    pName: string,
    fName: string,
    email: string,
    password: string,
    adress: string,
    phone: string

}


type ActionType = {
    type: "CREATE_USER",
    data: Usertype
} | {

    type: "UPDATE_USER",
    data: Partial<Usertype>
} | {
    type: "DELETE_USER",

}

export const mainUserContext = createContext<{ state: Usertype, dispatch: Dispatch<ActionType> }>({ state: {} as Usertype, dispatch: () => null })
export const dispatchContext=createContext<Dispatch<ActionType>>(()=>null)
export default ( state: Usertype, action: ActionType ): Usertype => {

    switch (action.type) {
        case "CREATE_USER":
            return { ...action.data }
        case "UPDATE_USER":
            return { ...state, ...action.data }
        default:
            return state
    }



}