const { createTheme } = require("@mui/material");

let theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
        },
        secondary: {
            main: '#f44336',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                }
            }
        }
    }
})

export default theme;