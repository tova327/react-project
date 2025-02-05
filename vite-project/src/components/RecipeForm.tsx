import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import { addRecipe, RecipeToAdd } from '../store/recipeSlice';
import { MainUserContext } from './userReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import RecipeFormContent from './RecipeFormContent';

const RecipeForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    ingredients: yup.array().of(yup.string().required('Ingredient is required')).required('At least one ingredient is required'),
    instructions: yup.string().required('Instructions are required'),
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
      setSuccessMessage('Recipe added successfully!');
    } catch (error) {
      if (error === "Unauthorized") {
        setErrorMessage("Unauthorized. You have to login in order to add a recipe.");
      } else {
        setErrorMessage("An error occurred while adding the recipe.");
      }
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add a New Recipe
      </Typography>
      <RecipeFormContent validationSchema={validationSchema} onSubmit={onSubmit}/>
      
      <Snackbar open={snackbarOpen} onClose={handleSnackbarClose} autoHideDuration={6000}>
        {errorMessage ? (
          <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        ) : (
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
            {successMessage}
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default RecipeForm;