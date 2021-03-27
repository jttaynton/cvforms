import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

const styles = {
    labelAsterisk: {
        color: "red"
    }
};

const DropDown = ({
    classes,
    label,
    value,
    onChange,
    options,
    req = false,
    error = {},
    disabled = false,
    variant = "outlined",
    placeholder = ''
}) => {

    let isError = false;
    if (error.isValid !== undefined && !error.isValid) isError = true;

    let endAdornment = null;

    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            margin="normal"
            variant={variant}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            InputProps={{
                endAdornment: endAdornment
            }}
            required={req}
            placeholder={placeholder}
            disabled={disabled}
            error={isError}
            select>
            {options.map((obj, index) => {
                const val = (obj.hasOwnProperty('value') && obj.value !== undefined) ? obj.value : obj;
                const label = (obj.hasOwnProperty('label') && obj.label !== undefined) ? obj.label : obj;

                if (val === 'Divider') {
                    return <Divider key={index} />;
                } else {
                    return (<MenuItem key={index} value={val}>{label}</MenuItem>);
                }
            })}
        </TextField>
    )
}

export default withStyles(styles)(DropDown);
