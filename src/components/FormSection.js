import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FormControl from './FormControl';

const FormSection = ({
    section,
    form,
    onChange
}) => {
    console.log(form);
    
    return (
        <>
            <div className="sectionHeader">
                <div>
                    <Typography variant="h5" className="sectionTitle">{section.title}</Typography>
                </div>
            </div>
            <Typography variant="subtitle2" gutterBottom>{section.description}</Typography>

            <Grid container spacing={2} className="sectionControls">
                {(section.controls || []).map((control, idx) => {
                    return <FormControl form={form} onChange={onChange} key={idx} control={control} />
                })}
            </Grid>
        </>
    )
}

export default FormSection;