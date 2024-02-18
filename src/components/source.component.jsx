import React from "react";
import { 
    Card, 
    Divider, 
    TextField, 
    Typography 
} from "@mui/material";
import Box from '@mui/material/Box';
import { KeyValuePair } from "./common/keyValuePair.component";

export function Source () {
    return (
        <Card>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography variant="h5" color="inherit">
                    Source - API (GET)
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    API URL
                </Typography>
                <TextField id="api-url" placeholder="API URL" variant="outlined" sx={{ minWidth: 350 }}/>
            </Box>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    Query Parameters
                </Typography>
                <KeyValuePair/>
            </Box>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    API Headers
                </Typography>
                <KeyValuePair/>
            </Box>
        </Card>
    )
}