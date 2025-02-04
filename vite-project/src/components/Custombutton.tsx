import { Button } from "@mui/material"



const CustomButton=({type1,variant,onClick,startIcon,massage}:{type1?:string,variant?:string,onClick?:Function,startIcon?:React.ReactNode,massage:string})=>{







    return(<>
    
    <Button type= {type1} onClick={onClick} variant={variant} startIcon={startIcon}>

        {massage}
        
    </Button>
    
    </>)
}
export default CustomButton