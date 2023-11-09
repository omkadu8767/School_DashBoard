import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {
    Box,
    Button,
    Container,
    Pagination,
    Stack,
    SvgIcon,
    Typography,
    PlusIcon,
    Unstable_Grid2 as Grid
} from '@mui/material';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';






function MyModal({ open, handleClose }) {
    return (
        <Dialog open={open} /*onClose={handleClose}*/ maxWidth="lg" fullWidth >
            <DialogTitle>Import As CSV</DialogTitle>
            <DialogContent style={{ width: '80vw', maxHeight: '80vh' }} >
                {/* Add your modal content here  */}
                
                <Stack spacing={3}>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={4}
                    >
                <Stack spacing={3}>
                    
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={20}
                    >
                        <Button
                            
                            startIcon={(
                                <SvgIcon fontSize="small">
                                    <ArrowDownOnSquareIcon />
                                </SvgIcon>
                                
                            )}
                         variant="contained"
                        >
                            Download Demo
                        </Button>
                        <Button
                            
                            startIcon={(
                                <SvgIcon fontSize="small">
                                    <ArrowUpOnSquareIcon />
                                </SvgIcon>
                            )}
                             variant="contained"
                        >
                            Upload CSV
                        </Button>
                    </Stack>
                </Stack>
                </Stack>
                </Stack>
                <p style={{ fontWeight: 'bold' }}>Instructions:-</p>
                <ul>
                    <li>The file must be strictly in .csv format,</li>
                    <li>File should be equal to or less than 5 MB.</li>
                    <li>Make sure the CSV file is formatted correctly</li>
                    <li>Check for errors in the CSV file</li>
                    <li>Use a text editor to view the CSV file</li>
                    <li>Rename the CSV file to something descriptive</li>
                    <li>Back up the CSV file</li>
                    </ul>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
export default MyModal;
