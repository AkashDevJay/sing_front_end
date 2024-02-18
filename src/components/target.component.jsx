import React from "react";
import { 
    Card, 
    Divider, 
    TextField, 
    Typography 
} from "@mui/material";
import Box from '@mui/material/Box';

export function Target () {
    return (
        <Card>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography variant="h5" color="inherit">
                    Target - AWS S3 File Writer
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    Bucket
                </Typography>
                <TextField id="bucket" placeholder="Enter the Bucket" variant="outlined" sx={{ minWidth: 350 }}/>
            </Box>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    File Key
                </Typography>
                <TextField id="file-key" placeholder="Enter the File Key" variant="outlined" sx={{ minWidth: 350 }}/>
            </Box>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    Access Key
                </Typography>
                <TextField id="access-key" placeholder="Enter the Access Key" variant="outlined" sx={{ minWidth: 350 }}/>
            </Box>
            <Box sx={{ pl: 2, pt: 1, pb: 1 }}>
                <Typography color="inherit" sx={{ fontWeight: 'bold'}}>
                    Secret Key
                </Typography>
                <TextField id="secret-key" placeholder="Enter the Secret Key" variant="outlined" sx={{ minWidth: 350 }}/>
            </Box>
        </Card>
    )
}