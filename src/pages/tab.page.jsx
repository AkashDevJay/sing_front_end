import React from "react";
import { TabView } from "../components/dataTransferationTabs/tabView.component";
import { Grid } from "@mui/material";
import { SelectorDropdown } from "../components/selectorDropdown.component";
import { SubHeader } from "../components/common/subHeader.component";

export function Tab () {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SubHeader/>
            </Grid>
            <Grid item xs={3}>
                <SelectorDropdown/>
            </Grid>
            <Grid item xs={9}>
                <TabView/>
            </Grid>
        </Grid>
    )
}