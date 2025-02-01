import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../store/recipeSlice';
import { MainUserContext } from './userReducer';

interface RecipeToAdd {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

const RecipeForm: React.FC = () => {
  const [int,setInt]=useState([''])
  const { state: cuser } = useContext(MainUserContext);
  const dispatch = useDispatch();
  const defaultValue: RecipeToAdd = {
    title: '',
    description: '',
    ingredients: [''],
    instructions: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    ingredients: Yup.array().required('Ingredient is required')
      .of(Yup.string().required('Ingredient is required'))
      .min(1, 'At least one ingredient is required'),
    instructions: Yup.string().required('Instructions are required'),
  });

  const { control, handleSubmit, register, getValues, setValue } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(validationSchema),
  });

  useEffect(()=>{setInt(getValues('ingredients'))},[])

  const onSubmit = (data: RecipeToAdd) => {
    setValue('ingredients', [...int])
    dispatch(addRecipe({ recipe: data, userid: cuser.id }));
    console.log('Form data submitted:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      
      <Typography variant="h6">Add a Recipe</Typography>

      <TextField
        {...register('title')}
        label="Recipe Title"
        fullWidth
        margin="normal"
      />

      <TextField
        {...register('description')}
        label="Recipe Description"
        fullWidth
        margin="normal"
      />

      <Typography variant="subtitle1">Ingredients</Typography>
      {int.map((ingredient, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <TextField
            {...register(`ingredients.${index}`)}
            label={`Ingredient ${index + 1}`}
            fullWidth
          />
          <Button
            type="button"
            onClick={() => {
              const ingredients = int//getValues('ingredients');
              ingredients.splice(index, 1);
              setInt([...ingredients])
              //setValue('ingredients', [...ingredients]);
            }}
            variant="outlined"
            color="secondary"
            sx={{ ml: 1 }}
            size="medium"
          >
            Remove
          </Button>
        </Box>
      ))}
      <Button
        type="button"
        onClick={() => {
          const ingredients = int//getValues('ingredients');
          setInt([...ingredients, ''])
          //setValue('ingredients', [...ingredients, '']);
        }}
        variant="contained"
        sx={{ mb: 2 }}
        size="medium"
      >
        Add Ingredient
      </Button>

      <TextField
        {...register('instructions')}
        label="Instructions"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />

      <Button type="submit" variant="contained" color="primary" size="medium">
        Submit
      </Button>
      
    </Box>
  );
};

export default RecipeForm;