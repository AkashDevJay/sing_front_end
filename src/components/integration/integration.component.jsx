import React from "react";
import { TabView } from "../dataTransferationTabs/tabView.component";
import { Grid } from "@mui/material";
import { SelectorDropdown } from "../selectorDropdown.component";
import { SubHeader } from "../common/subHeader.component";

export function Integration () {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SubHeader/>
            </Grid>
            <Grid item xs={4}>
                <SelectorDropdown/>
            </Grid>
            <Grid item xs={8}>
                <TabView/>
            </Grid>
        </Grid>
    )
}