import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react'
// create the variables to store our colors
const lightGreen = "#9FE2BF"
const lightBrown = "#EA7727"

export default createMuiTheme({
    palette:{
        common:{
             lightGreen:`${lightGreen}`,
             lightBrown:`${lightBrown}`
            },
        primary:{
            main:`${lightGreen}`
        },
        secondary:{
            main: `${lightBrown}`
        },
        typography:{
            tab:{
                fontFamily: "Roboto",
                fontWeight: 700,
                fontSize: "1rem",
 
            }
        }
    }
})