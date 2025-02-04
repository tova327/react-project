import { createContext, Dispatch } from "react"

export type Usertype = {
    id:number,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    address?: string,
    phone?: string

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

export const MainUserContext = createContext<{ state: Usertype, dispatch: Dispatch<ActionType> }>({ state: {} as Usertype, dispatch: () => null })
export const DispatchContext=createContext<Dispatch<ActionType>>(()=>null)
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