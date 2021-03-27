import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const TextInput = ({
    classes, 
    label, 
    value="", 
    onChange, 
    onClick=()=>{},
    req=false, 
    maxLength=50, 
    inputType="text", 
    disabled=false,
    readOnly=false,
    rows=1,
    prefix,
    suffix,
    error={},
    helperText="",
    helpKey,
    disableAutocomplete=false,
    autoComplete,
    placeholder
}) => {

    let inputProps = {};
    let isMultiline = false;

    if (prefix) {
        inputProps.startAdornment = <InputAdornment position="start">{prefix}</InputAdornment>;
    }

    if (suffix) {
        inputProps.endAdornment = <InputAdornment position="end">{suffix}</InputAdornment>;
    }

    if (readOnly) {
        inputProps.readOnly = readOnly;
    }

    let trueInputProps = {};

    if (disableAutocomplete)
        trueInputProps.autocomplete = 'new-password';

    if (rows > 1) {
        isMultiline = true;
        trueInputProps.maxLength = 9999;
    }

    let isError = false;
    if (error.isValid !== undefined && !error.isValid) isError = true;

    return (
        <TextField
            label={label}
            value={value}
            autoComplete={autoComplete}
            onClick={onClick}
            onChange={onChange}
            margin="normal"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputProps={trueInputProps}
            required={req}
            type={inputType}
            disabled={disabled}
            rows={rows}
            error={isError}
            multiline={isMultiline}
            helperText={helperText}
            // eslint-disable-next-line
            InputProps={inputProps}
            placeholder={placeholder}
        />
    )
}

export default TextInput;