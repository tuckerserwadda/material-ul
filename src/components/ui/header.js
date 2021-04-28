import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar" // app bar component
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"// helps to scroll the items in the body past the toolbar 
import {makeStyles} from "@material-ui/core/styles" // inline styling 
import Tabs from "@material-ui/core/Tabs" 
import Tab from "@material-ui/core/Tab" 
import Button from "@material-ui/core/Button"


import logo from "../../assets/logo.svg"
// create th object to use the styles 
const useStyles = makeStyles(
    theme =>({
        toolBarMargin:{
            ...theme.mixins.toolbar,
            marginBottom: "3em",
            width: "100%"

        },
        logo:{
            height :"7em"
        },
        tabsContainer:{
            marginLeft:"auto"
        },
        tab:{
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft:"25px",
            textTransform: "none",
        },
        button: {
            borderRadius: "50px",
            marginLeft:"50px",
            marginRight:"25px",
            fontFamily: "Lobster",
            textTransform: "none",
            color: "white"
        }
    })


)

// styling using material u 
    // elevation scroll
    function ElevationScroll(props) {
        const { children} = props;
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
    
        });
      
        return React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }
      

const Header = () => {
    const classes = useStyles()
    const[tabValue, setTabValue] = useState(0)
    const handleTabChange = (event, value) =>{
        setTabValue(value)
    }
    return (
        <>
        <ElevationScroll>
        <AppBar>
            <Toolbar disableGutters ={true}>
                <img className ={classes.logo} src= {logo} alt ="Arc development"/> 
                <Tabs value = {tabValue} onChange={handleTabChange} className = {classes.tabsContainer}>
                    <Tab className = {classes.tab} label = "Home"></Tab>
                    <Tab className = {classes.tab} label = "Services"></Tab>
                    <Tab className = {classes.tab} label = "The Revolution"></Tab>
                    <Tab className = {classes.tab} label = "About Us"></Tab>
                    <Tab className = {classes.tab} label = "Contact Us"></Tab>
                </Tabs>
                <Button className ={classes.button} variant = "contained" color = "secondary">Free Estimate</Button>
                </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className = {classes.toolBarMargin}/>
        </>
    )
}

export default Header
