import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SaveIcon from '@mui/icons-material/Save';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
  }));

export function SubHeader () {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow : 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow : 1}}>
                        Data Integration
                    </Typography>
                    <IconButton className={classes.iconButtonLabel}>
                        <SaveIcon className={classes.iconButton}/>
                        <div class={classes.iconButtonText}>
                            Save
                        </div>
                    </IconButton>
                    <IconButton className={classes.iconButtonLabel}>
                        <PlayArrowIcon className={classes.iconButton}/>
                        <div class={classes.iconButtonText}>
                            Execute
                        </div>
                    </IconButton>
                    <IconButton className={classes.iconButtonLabel}>
                        <CalendarMonthIcon className={classes.iconButton}/>
                        <div class={classes.iconButtonText}>
                            Schedule
                        </div>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}