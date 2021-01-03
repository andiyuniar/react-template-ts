import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography'

const theme = createMuiTheme({
    palette,
    typography,
    spacing: factor => `${0.25 * factor}rem`
});

export default theme
