import React from 'react'
import Input from './Input'
import ReminderList from './ReminderList'
import Summary from './Summary'
import { withController } from '../../hoc/withController'
import { ReminderController } from './ReminderController'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function ReminderScreen() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom> Reminder screen</Typography>
            <Input/>
            <ReminderList />
            <Summary/>
        </Container>
    )
}

export default withController(ReminderController)(ReminderScreen)