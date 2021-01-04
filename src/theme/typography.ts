import palette from './palette';

const typography = {
    // fontFamily: ['"Roboto"', '"sans-serif"'].join(','),
    // fontFamilySecondary: ['"Work Sans"', '"sans-serif"'].join(','),
    h2: {
        color: palette.text.primary,
        fontWeight: 300,
        fontSize: '3.75rem',
        letterSpacing: '-0.00833em',
        lineHeight: 1.2
    },
    h1: {
        color: palette.text.primary,
        fontWeight: 300,
        fontSize: '6rem',
        letterSpacing: '-0.01562em',
        lineHeight: 1.167
    },
    h3: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: '3rem',
        letterSpacing: '0em',
        lineHeight: 1.167
    },
    h4: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: '2.125rem',
        letterSpacing: '0.00735em',
        lineHeight: 1.235
    },
    h5: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: '1.5rem',
        letterSpacing: '0em',
        lineHeight: 1.334
    },
    h6: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '1.25rem',
        letterSpacing: '0.0075em',
        lineHeight: 1.6
    },
    subtitle1: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: '1rem',
        letterSpacing: '0.00938em',
        lineHeight: 1.75
    },
    subtitle2: {
        color: palette.text.secondary,
        fontWeight: 500,
        fontSize: '0.875rem',
        letterSpacing: '0.00714em',
        lineHeight: 1.57
    },
    body1: {
        color: palette.text.primary,
        fontWeight:400,
        fontSize: '1rem',
        letterSpacing: '0.00938em',
        lineHeight: 1.5
    },
    body2: {
        color: palette.text.secondary,
        fontWeight:400,
        fontSize: '0.875rem',
        letterSpacing: '0.01071em',
        lineHeight: 1.43
    },
    button: {
        color: palette.text.primary,
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: '0.02857em'
    },
    caption: {
        color: palette.text.secondary,
        fontSize: '11px',
        letterSpacing: '0.33px',
        lineHeight: '13px'
    },
    overline: {
        color: palette.text.secondary,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.33px',
        lineHeight: '13px',
    }
}

export default typography;