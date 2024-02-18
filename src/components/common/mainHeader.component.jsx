import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Person2Icon from '@mui/icons-material/Person2';

const useStyles = makeStyles(theme => ({
    iconButtonLabel: {
      flex: 1,
      flexDirection: 'column',
      color: 'white',
      width: '6%',
      maxWidth: '6%'
    },
    iconButtonText: {
        flex: 1,
        color: 'white',
        fontSize: '10px'
    },
    iconButton: {
        paddingBottom:'10%',
        color:'white'
    },
    title: {
        flexGrow: 1
    }
  }));

export function MainHeader ({userName}) {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow : 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" className={classes.title}>
                        Singular Data Platform
                    </Typography>
                    <IconButton className={classes.iconButtonLabel}>
                        <Person2Icon className={classes.iconButton}/>
                        <div className={classes.iconButtonText}>
                            {userName}
                        </div>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}