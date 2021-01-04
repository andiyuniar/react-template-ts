import { colors } from '@material-ui/core';


const WHITE = '#FFFFFF';
const BLACK = 'rgba(0,0,0,0.87)';

const palette = {
    BLACK,
    WHITE,
    primary: {
        contrastText: WHITE,
        dark: colors.indigo[700],
        main: colors.indigo[500],
        light: colors.indigo[300]
    },
    secondary: {
        contrastText: WHITE,
        dark: '#c51162',
        main: '#f50057',
        light: '#ff4081'
    },
    success: {
        contrastText: BLACK,
        dark: colors.green[700],
        main: colors.green[500],
        light: colors.green[300]
    },
    info: {
        contrastText: WHITE,
        dark: colors.blue[700],
        main: colors.blue[500],
        light: colors.blue[300]
    },
    warning: {
        contrastText: BLACK,
        dark: colors.orange[700],
        main: colors.orange[500],
        light: colors.orange[300]
    },
    error: {
        contrastText: WHITE,
        dark: colors.red[700],
        main: colors.red[500],
        light: colors.red[300]
    },
    text: {
        primary: BLACK,
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
        link: colors.blue[600]
    },
    background: {
        default: '#fafafa',
        paper: WHITE
    },
    icon: colors.blueGrey[600],
    divider: 'rgba(0, 0, 0, 0.12)',
    customTopBar: {
        dark: '#28282a'
    },
    customColor: {
        light: '#fff5f8',
        main: '#ff3366'
    }
};

export default palette;