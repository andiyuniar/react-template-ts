import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyle = makeStyles((theme:Theme) => ({
  title: {
    marginTop: theme.spacing(3),
    textTransform: 'capitalize'
  }
}))

const Title: React.FC<{ children: string }> = (props) => {
  const classes = useStyle();
  return(
    <Typography variant='h6' className={classes.title}>
      {props.children}
    </Typography>
  )
}

export default Title;