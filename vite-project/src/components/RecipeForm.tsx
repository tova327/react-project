import React, { useContext } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../store/recipeSlice';
import { mainUserContext } from './userReducer';

// Define the form values type
interface RecipeFormValues {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

const RecipeForm: React.FC = () => {

  const {state:cuser,dispatch:cuserDispatch}=useContext(mainUserContext)
  const dispatch:any=useDispatch()
  const initialValues: RecipeFormValues = {
    title: '',
    description: '',
    ingredients: [''],
    instructions: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    ingredients: Yup.array()
      .of(Yup.string().required('Ingredient is required'))
      .min(1, 'At least one ingredient is required'),
    instructions: Yup.string().required('Instructions are required'),
  });

  const handlesubmit=(value:RecipeFormValues)=>{

    dispatch(addRecipe({recipe:value,userid:cuser.id}))
  }



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form data', values);
        handlesubmit(values)
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="title">Recipe Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" />
          </div>
          
          <div>
            <label htmlFor="description">Recipe Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" component="div" />
          </div>

          <FieldArray name="ingredients">
            {({ push, remove }) => (
              <div>
                <label>Ingredients</label>
                {values.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <Field name={`ingredients[${index}]`} type="text" />
                    <ErrorMessage name={`ingredients[${index}]`} component="div" />
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => push('')}>
                  Add Ingredient
                </button>
              </div>
            )}
          </FieldArray>

          <div>
            <label htmlFor="instructions">Instructions</label>
            <Field name="instructions" as="textarea" />
            <ErrorMessage name="instructions" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RecipeForm;