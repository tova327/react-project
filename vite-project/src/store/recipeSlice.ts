import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StoreType } from "./store";


export type Recipe = {
    id: number,
    title: string,
    description:string,
    ingredients:string[],
    instructions:string
}

type RecipeToAdd={


    title: string,
    description:string,
    ingredients:string[],
    instructions:string
}

const globalURL="http://localhost:3000"

export const fetchRecipes = createAsyncThunk('recipes/fetch',
    async (_, thunkAPI) => {
        try {
            console.log('in async thunk');
            const response = await axios.get(globalURL+'/api/recipes')
            return response.data
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addRecipe = createAsyncThunk('recipes/add',
    async ({recipe,userid}:{recipe:RecipeToAdd,userid:number}, thunkAPI) => {
        try {
            console.log('in async thunk');
            const response = await axios.post(
                globalURL+'/api/recipes',recipe,{headers:{"user-id":userid}}//??????????????userid -איך אדע מה ה 
            )
            return response.data
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: { list: [] as Recipe[], loading: true },
    reducers: {
        // add: (state) => {
        //     state.list.push({
        //         id: state.list.length,
        //         title: 'new recipe',
        //         description: "",
        //         ingredients: [],
        //         instructions: ""
        //     })
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled,
                (state, action) => {
                    console.log('fulfilled');
                    state.list = [...action.payload]
                })
            .addCase(fetchRecipes.rejected,
                () => {
                    console.log('failed');
                }
            )
            .addCase(addRecipe.fulfilled,
                (state, action) => {
                    console.log('add: fulfilled');
                    state.list = [...state.list, action.payload.recipe]
                })
            .addCase(addRecipe.rejected,
                () => {
                    console.log('add: failed');
                }
            )
    }
});
//export const { add } = recipesSlice.actions;
export default recipesSlice;
