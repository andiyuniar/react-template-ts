import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		root: {
			height: '100%'
		},
		grid: {
			height: '100%'
		},
		imageContainer: {
			[theme.breakpoints.down('md')]: { display: 'none'},
			backgroundColor: theme.palette.common.white,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		},
		content: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column'
		},
		contentHeader: {
			display: 'flex',
			alignItems: 'center',
			paddingTop: theme.spacing(1),
			paddingBototm: theme.spacing(1),
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1)
		},
		contentBody: {
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
					justifyContent: 'center'
			}
		},
	})
);

export const loginFormStyle = makeStyles((theme) => ({
	form: {
		paddingLeft: 30,
		paddingRight: 98,
		paddingBottom: 125,
		flexBasis: 700,
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2)
		}
	},
	title: {
		marginTop: theme.spacing(3)
	},
	textField: {
		marginTop: theme.spacing(2)
	},
	signInButton: {
		margin: theme.spacing(2, 0)
	},
	errorTextHelper: {
		color: theme.palette.error.main,
		margin: '5px 0'
	}
}));