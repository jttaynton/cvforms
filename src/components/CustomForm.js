import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import ls from 'local-storage';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormSection from './FormSection';

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const CustomForm = ({ 
    formDef, 
    savedForm={}
}) => {
    console.log(savedForm);

    const [isWorking, setIsWorking] = useState(false);
    const [form, setForm] = useState(savedForm);

    const onChange = prop => eventOrValue => {
        let val = null;
        let obj = _.cloneDeep(form);

        val = eventOrValue.target ?
            (eventOrValue.target.hasOwnProperty('checked') ? eventOrValue.target.checked : eventOrValue.target.value) :
            eventOrValue;

        _.set(obj, prop, val);
    
        obj.modifiedDt = Date.now();
        console.log(obj);
        setForm(obj);
    };

    const onSave = async () => {
        setIsWorking(true);
        let obj = _.cloneDeep(form);
        obj.savedDt = Date.now();
        await timeout(2000);
        ls.set('savedForm', JSON.stringify(obj));
        setIsWorking(false);
    }

    const onDelete = async () => {
        setIsWorking(true);
        await timeout(2000);
        ls.set('savedForm', null);
        setIsWorking(false);
        window.location.reload();
    }

    return (
        <>
            <div className="formContainer">
                <Typography variant="h4" gutterBottom>{formDef.title}</Typography>
                <Typography variant="subtitle1">{formDef.description}</Typography>

                {formDef.sections.map((section, idx) => {
                    return <FormSection form={form} onChange={onChange} key={idx} section={section} />;
                })}
            </div>
            <div className="formButtons">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button
                            onClick={onDelete}
                            disabled={isWorking}
                            variant="contained"
                            color="default">Delete Form</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={onSave}
                            disabled={isWorking}
                            variant="contained"
                            color="primary">Save Form</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default CustomForm;