import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField, IconButton, Box} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface IngredientInputProps {
  control: any;
  index: number;
  errors: any;
  onRemove: () => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ control, index, errors, onRemove }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Controller
        name={`ingredients.${index}` as const}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            variant="outlined"
            {...field}
            error={!!errors.ingredients?.[index]}
            helperText={errors.ingredients?.[index]?.message}
          />
        )}
      />
      <IconButton onClick={onRemove}>
        <RemoveCircleIcon color="error" />
      </IconButton>
    </Box>
  );
};

export default IngredientInput;