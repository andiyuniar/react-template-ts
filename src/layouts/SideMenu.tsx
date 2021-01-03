import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PaymentIcon from '@material-ui/icons/Payment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const drawerWidth = 240;

type Props = {[x:string]: any};
const CustomRouterLink = forwardRef<HTMLDivElement, Props>((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1}}>
        <RouterLink {...props} to={props.href} />
    </div>
))

const pages: {
    title: string;
    href: string;
    icon: JSX.Element;
}[] = [
    {
        title: 'Accounts',
        href: '/',
        icon: <AccountBalanceWalletIcon />
    },
    {
        title: 'Transaction',
        href: '/transaction',
        icon: <LocalAtmIcon />
    },
    {
        title: 'Payment',
        href: '/payment',
        icon: <PaymentIcon />
    },
    {
        title: 'Institutions',
        href: '/menu2',
        icon: <AccountBalanceIcon />
    }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface sidemenuProps {
    [x:string]:any
}

const SideMenu = (props:sidemenuProps) => {
    const { open, variant, onClose } = props;
    const classes = useStyles();
    return(
        <Drawer anchor='left' classes={{paper: classes.drawer }} onClose={onClose} variant='permanent' open={true}>
            <List>
                {pages.map((page, index) => (
                    <ListItem key={index}>
                        <Button component={CustomRouterLink} startIcon={page.icon} href={page.href} >
                            {page.title}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideMenu;