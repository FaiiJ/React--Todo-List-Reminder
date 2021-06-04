import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useReminderContext } from './ReminderController';



export default function Input() {

    const {taskInput , setTaskInput ,onSave} = useReminderContext()
    return (
        <div>
            <Grid alignContent="center" justify="center" container>
                <Grid>
                    <TextField 
                    id="outlined-basic" 
                    label="Task" 
                    variant="outlined" 
                    size="small" 
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                        />
                </Grid>
                <Button onClick={onSave} variant="contained" color="primary">
                    Save
                </Button>
            </Grid>
        </div>
    )
}