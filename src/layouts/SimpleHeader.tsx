import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { headerStyle } from './style';
import WebTitle from '../components/WebTitle';

const SimpleHeader = () => {
	const classes = headerStyle();

	return(
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<WebTitle />
					<Button color='inherit'>Login</Button>
					<Button color='inherit'>Register</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SimpleHeader;