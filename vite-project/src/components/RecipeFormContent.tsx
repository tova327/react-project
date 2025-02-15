import { TextField, Typography, Button } from "@mui/material"
import IngredientInput from "./IngredientInput"
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { RecipeToAdd } from "../store/recipeSlice";
import * as yup from "yup";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const RecipeFormContent = ({validationSchema,onSubmit}:{validationSchema:yup.ObjectSchema<{
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
}, yup.AnyObject, {
    title: undefined;
    description: undefined;
    ingredients: "";
    instructions: undefined;
}, "">,onSubmit:SubmitHandler<RecipeToAdd>}) => {
    const { register, handleSubmit, formState: { errors }, control ,reset} = useForm<RecipeToAdd>({
        resolver: yupResolver(validationSchema),
        defaultValues: { ingredients: [''] },
    });
    const { fields: ingredientFields, append, remove } = useFieldArray({
        control,
        name: "ingredients" as never,
    });
    const innerOnSubmit=(data:RecipeToAdd)=>{onSubmit(data); reset()}
    return (<>

        <form onSubmit={handleSubmit(innerOnSubmit)}>
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
                    key={field.id}
                    control={control}
                    index={index}
                    errors={errors}
                    onRemove={() => remove(index)}
                />
            ))}
            <Button
                variant="outlined"
                startIcon={<AddCircleIcon />}
                onClick={() => append('')}
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

    </>)
}
export default RecipeFormContent