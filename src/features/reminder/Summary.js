import { Grid } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useReminderContext } from './ReminderController';

export default function Summary() {

const { totalReminder, totalFavorite,totalDone } = useReminderContext()
    return(
      <Grid justify="center" direction="column" container>
          <Typography variant="body">Progress : {totalDone}/{totalReminder} </Typography>
          <Typography variant="body">Favorite : {totalFavorite}/{totalReminder} </Typography>
      </Grid>
    )
}