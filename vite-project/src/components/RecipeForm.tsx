import React, { useContext, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addRecipe } from '../store/recipeSlice';
import { MainUserContext } from './userReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import IngredientInput from './IngredientInput'; 

type RecipeToAdd = {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
};

const RecipeForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    ingredients: yup.array().of(yup.string().required('Ingredient is required')).required('At least one ingredient is required'),
    instructions: yup.string().required('Instructions are required'),
  });
  
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<RecipeToAdd>({
    resolver: yupResolver(validationSchema),
    defaultValues: { ingredients: [''] },
  });

  
  const { fields: ingredientFields, append, remove } = useFieldArray({
    control,
    name: "ingredients"
  });

  const { state: cuser } = useContext(MainUserContext);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: RecipeToAdd) => {
    try {
      await dispatch(addRecipe({
        recipe: data,
        userid: cuser.id,
      })).unwrap();
      console.log('Form data submitted:', data);
      reset(); 
    } catch (error) {
      if (error === "Unauthorized") {
        setErrorMessage("Unauthorized. You have to log in in order to add a recipe.");
      } else {
        setErrorMessage("An error occurred while adding the recipe.");
      }
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add a New Recipe
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Recipe Title"
          variant="outlined"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
          sx={{ mb: 2 }}
        />
        <Typography variant="h6">Ingredients</Typography>
        {ingredientFields.map((field, index) => (
          <IngredientInput
            key={field.id} // Use field.id for unique key
            control={control}
            index={index}
            errors={errors}
            onRemove={() => remove(index)} // Use remove method from useFieldArray
          />
        ))}
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          onClick={() => append('')} // Use append method from useFieldArray
          sx={{ mb: 2 }}
        >
          Add Ingredient
        </Button>
        <TextField
          fullWidth
          label="Instructions"
          variant="outlined"
          multiline
          rows={4}
          {...register('instructions')}
          error={!!errors.instructions}
          helperText={errors.instructions?.message}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary"> Submit Recipe </Button>
      </form>
      <Snackbar open={snackbarOpen} onClose={handleSnackbarClose} message={errorMessage} autoHideDuration={6000}/>
    </Box>
  );
};

export default RecipeForm;
