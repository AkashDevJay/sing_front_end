import React, { useState } from "react";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from "@mui/material";
import { Integration } from "../integration/integration.component";
import { ComingSoon } from "../common/comingSoon.component";

export function MainTab () {

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="Sources And Targets">
                    <Tab label="Integration" value="1"/>
                    <Tab label="Machine Learning" value="2"/>
                    <Tab label="Reporting" value="3"/>
                </TabList>
                <TabPanel value="1" sx={{border: 0, padding:0.5}}><Integration/></TabPanel>
                <TabPanel value="2" sx={{border: 0, padding:0.5}}><ComingSoon/></TabPanel>
                <TabPanel value="3" sx={{border: 0, padding:0.5}}><ComingSoon/></TabPanel>
            </TabContext>
        </Box>
    )
}