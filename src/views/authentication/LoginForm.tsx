import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { loginFormStyle } from './style';
import Title from '../../components/Title';

type LoginData = {
  username: string;
  password: string;
}

const LoginForm = () => {
  const classes = loginFormStyle();
  const { register, handleSubmit, errors } = useForm<LoginData>();

  const submitHandler: SubmitHandler<LoginData> = (data) => {
    console.log('login submitted');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
      <div className={classes.errorTextHelper}>
        Error
      </div>
      <Title>sign in</Title>
      <TextField className={classes.textField} fullWidth variant='outlined' 
        type='text' label='Username' name='username' 
        inputRef={
          register({ required: 'User name is required'})
        } />
      <FormHelperText className={classes.errorTextHelper}>
        {errors.username && errors.username.message}
      </FormHelperText>
      <FormControl className={classes.textField} fullWidth variant='outlined'>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput endAdornment={
          <InputAdornment position='end'>
            <IconButton>
              <VisibilityOff />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70} name='password' />
      </FormControl>
      <FormHelperText className={classes.errorTextHelper}>
        error.password
      </FormHelperText>
      <Button className={classes.signInButton} color='primary' fullWidth variant='contained'
        type='submit' size='large'>
          Sign in
        </Button>
    </form>
  )
}

export default LoginForm;