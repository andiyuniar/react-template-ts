import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header = () => {
    return(
        <div >
            <Toolbar>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' >
                    Web Title
                </Typography>
                <Button color='inherit'>Log</Button>
            </Toolbar>
        </div>
    )
}