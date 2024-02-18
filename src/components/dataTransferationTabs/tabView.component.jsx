import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, IconButton, Tab } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { removeJob } from "../../store/features/dataTransfer/dataTransferJobSlice";
import { TabContent } from "./tabContent.component";

export function TabView () {

    const dataTransferJobs = useSelector((state) => state.dataTransferJobs);
    const dispatch = useDispatch();

    const [jobs, setJobs] = useState({});
    const [value, setValue] = useState("1");

    useEffect(() => {
        setJobs(dataTransferJobs)
    },[dataTransferJobs]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const closeTab = (id) => {
        console.log(`closing job ID : ${id}`);
        if(value === id) {
            setValue(jobs?.jobs && jobs.jobs.length > 0 ?  jobs.jobs.length - 1 : "1")
        }
        dispatch(removeJob({
            id
        }))
    }

    const generateTabs = () => {
        const tabs = [];
        jobs.jobs && jobs.jobs.forEach(job => 
            tabs.push(<Tab key={job.id} label={<span>{`API Data to AWS-S3 ${job.id}`} <IconButton onClick={() => closeTab(job.id)}><CloseIcon/></IconButton></span>} value={job.id.toString()}/>)
        );
        return tabs;
    }

    const generateTabPanels = () => {
        const tabPanels = [];
        jobs.jobs && jobs.jobs.forEach(job => 
            tabPanels.push(<TabPanel value={job.id.toString()}><TabContent/></TabPanel>)
        )
        return tabPanels;
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="Sources And Targets">
                    {generateTabs()}
                </TabList>
                {generateTabPanels()}
            </TabContext>
        </Box>
    )
}