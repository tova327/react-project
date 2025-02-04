
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./components/About";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import RecipesList from "./components/RecipesList";
import RecipeForm from "./components/RecipeForm";

export const router=createBrowserRouter([
    {

        path:'/', element:  <AppLayout/>,
        errorElement: <h1>error</h1>,
        children:[
            {path: '/',element:<HomePage/>},
            {path: 'about',element:<AboutPage/>},
            {path:'recipes',element:<RecipesList/>},
            {path:'recipes/add',element:<RecipeForm/>}
        ]
    }
])