import React from "react";
import { Source } from "../source.component";
import { Target } from "../target.component";
import Grid from '@mui/material/Grid';

export function TabContent () {
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Source/>
            </Grid>
            <Grid item xs={6}>
                <Target/>
            </Grid>
        </Grid>
    )
}