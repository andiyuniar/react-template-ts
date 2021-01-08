import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import LoginForm from './LoginForm';

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item lg={7}></Grid>
        <Grid item lg={5} className={classes.content}>
          <div className={classes.contentBody}>
            <LoginForm />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login;