import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, styled, useTheme } from "@mui/material"
import { Recipe } from "../store/recipeSlice"

const ColorfulCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#ffffff', 
    color: theme.palette.text.primary,
    maxWidth: 400,
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: `0 4px 8px ${theme.palette.grey[500]}`,
}));


const FullRecipe=({recipe}:{recipe:Recipe})=>{
    const theme = useTheme();
    return(<>
        <ColorfulCard variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div" style={{ color: theme.palette.primary.main }}> {/* Changed title color to primary color */}
                    {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.primary" paragraph style={{ fontFamily: 'Arial, sans-serif' }}> {/* Changed body text color to black and set a nice font */}
                    {recipe.description}
                </Typography>
                <Typography variant="h6" style={{ color: theme.palette.primary.main }}> {/* Changed ingredients header color to primary color */}
                    Ingredients:
                </Typography>
                <List>
                    {recipe.ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ingredient} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Typography variant="h6" style={{ color: theme.palette.primary.main }}> 
                    Instructions:
                </Typography>
                <Typography variant="body2" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {recipe.instructions}
                </Typography>
            </CardContent>
        </ColorfulCard>
    </>)
}
export default FullRecipe