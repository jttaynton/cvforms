import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import TextInput from './controls/TextInput';
import DropDown from './controls/DropDown';

const FormControl = ({
    control,
    form,
    onChange
}) => {
    return (
        <Grid container item {...control.sizes} alignItems="center">
            { control.type === "text" && 
                <Typography variant="subtitle1">{control.data}</Typography>
            }

            { control.type === "input" && 
                <TextInput 
                    value={form[control.prop] || ''}
                    label={control.config.label} 
                    req={control.config.required || false}
                    placeholder={control.config.placeholder} 
                    onChange={onChange(control.prop)}
                />
            }

            { control.type === "input-numeric" &&
                <TextInput
                    value={form[control.prop] || ''}
                    inputType="number" 
                    label={control.config.label} 
                    req={control.config.required || false}
                    placeholder={control.config.placeholder} 
                    onChange={onChange(control.prop)}
                />
            }

            { control.type === "input-multiline" &&
                <TextInput
                    value={form[control.prop] || ''}
                    inputType="number"
                    rows={control.config.rows || 5}
                    label={control.config.label}
                    req={control.config.required || false}
                    placeholder={control.config.placeholder} 
                    onChange={onChange(control.prop)}
                />
            }

            { control.type === "drop-down" &&
                <DropDown
                    value={form[control.prop]}
                    label={control.config.label}
                    req={control.config.required || false}
                    options={control.config.options || []}
                    onChange={onChange(control.prop)}
                />
            }
        </Grid>
    )
}

export default FormControl;