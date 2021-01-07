import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const style = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    }
  }))

const WebTitle = () => {
  const classes = style();

  return (
    <Typography variant="h6" className={classes.title}>
      Web Title
    </Typography>
  )
}

export default WebTitle