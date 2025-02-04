import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes, Recipe } from '../store/recipeSlice';
import { AppDispatch, StoreType } from '../store/store';
import { Alert, CircularProgress, Divider, ListItemButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import FullRecipe from './fullRecipe';

export default function GutterlessList() {
    const { list: recipesList } = useSelector((store: StoreType) => store);
    const dispatch = useDispatch<AppDispatch>();
    const [recipe, setRecipe] = useState<Recipe>({
        id: 0,
        title: '',
        description: '',
        ingredients: [''],
        instructions: '',
    });

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: '400px', overflow: 'auto' }}>
                {recipesList.length !== 0 ? recipesList.map((value) => (
                    <ListItem key={value.id} component="div" disablePadding>
                        <ListItemButton onClick={() => setRecipe(value)}>
                            <ListItemText primary={`${value.title}`} />
                        </ListItemButton>
                    </ListItem>
                )) : <CircularProgress />}
            </List>
            <div>
                {recipe.id !== 0 ? <FullRecipe recipe={recipe} /> : <Alert severity="info">The recipe you will choose should be seen here</Alert>}
            </div>
        </Stack>
    );
}

