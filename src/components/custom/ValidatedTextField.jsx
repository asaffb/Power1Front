import React, { useState } from "react";

// material-ui
import TextField from '@mui/material/TextField';

export default function ValidatedTextField ({ isRequired, id, label, variant, validator, onValidity, onChange }) {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const handleChange = e => {

        const newValue = e.target.value;
        const errorMessage = validator(newValue);

        setValue(newValue);
        setError(errorMessage);
        onValidity(!errorMessage);

              
        if (errorMessage) {

            onChange('');
        }
        else {

            onChange(newValue);
        }
    };
    
    return (
      <TextField
        required={isRequired}
        id={id}
        label={label}
        variant={variant}
        value={value}
        onChange={handleChange}
        error={!!error}
        helperText={error}
      />
    );
};
