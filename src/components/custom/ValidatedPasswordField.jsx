import React, { useState } from "react";

// material-ui
import TextField from '@mui/material/TextField';

export default function ValidatedPasswordField ({ isRequired, id, label, confimId, confirmLabel, variant, validator, onValidity, onChange }) {

    const [value, setValue] = useState("");
    const [confirmValue, setConfirmValue] = useState("");
    const [error, setError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);

    const passwordMismatchMessage = "Passwords do not match";


    const handleChange = e => {

      const newValue = e.target.value;
      const errorMessage = validator(newValue);

        setValue(newValue);
        setConfirmValue("");  // Clear confirm field when password field is changed
        setError(errorMessage);
        setConfirmError(passwordMismatchMessage); // Turn off confirm field error indication
        onValidity(false);    // Reset component validity to be set again by confirm field
        onChange('');   // Reset component value to be set again by confirm field
    };
    
    const handleConfirmChange = e => {

        const newConfirmValue = e.target.value;
        const confirmErrorMessage = newConfirmValue !== value ? passwordMismatchMessage: false;

        setConfirmValue(newConfirmValue);
        setConfirmError(confirmErrorMessage);
        onValidity(!confirmErrorMessage); // Update validity with confirm field validity
        
        if (confirmErrorMessage) {

            onChange('');
        }
        else {

            onChange(newConfirmValue);
        }
    };

    return (
        <>
            <TextField
                required={isRequired}
                id={id}
                label={label}
                type="password"
                variant={variant}
                value={value}
                onChange={handleChange}
                error={!!error}
                helperText={error}
            />
            <TextField
                required={isRequired}
                id={confimId}
                label={confirmLabel}
                type="password"
                variant={variant}
                value={confirmValue}
                onChange={handleConfirmChange}
                error={!!confirmError}
                helperText={confirmError}
            />
      </>
    );
};
