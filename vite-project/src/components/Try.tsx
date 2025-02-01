import { useDispatch, useSelector } from "react-redux"
import { StoreType } from "../store/store"
import { useEffect } from "react"
import { fetchRecipes } from "../store/recipeSlice"
import FullRecipe from "./fullRecipe"
import { CircularProgress } from "@mui/material"

const RecipesList = () => {

    const { list: recipesList } = useSelector((store: StoreType) => store)
    const dispatch: any = useDispatch()

    useEffect(
        () => {
            dispatch(fetchRecipes())
        },
        [])
    return (
        <>
            {recipesList ? recipesList.map(r => (
                <FullRecipe key={r.id} recipe={r} />
            )) : <CircularProgress />}

        </>)
}

export default RecipesList