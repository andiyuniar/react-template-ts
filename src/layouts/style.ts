import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const headerStyle = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow:1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow:1,
            //justifyContent: 'left'
        },
        menuItem: {
            color: theme.palette.text.secondary,
        }
    })
);