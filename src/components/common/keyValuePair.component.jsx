
import React from "react";
import { 
    TextField, 
    Box
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export function KeyValuePair () {
    return (
        <Box>
            <TextField id="key" placeholder="Key" variant="outlined" sx={{ maxWidth: 150 }} m={2}/>
            <TextField id="value" placeholder="Value" variant="outlined" sx={{ maxWidth: 150 }} m={2}/>
            <AddIcon/>
        </Box>
    )
}