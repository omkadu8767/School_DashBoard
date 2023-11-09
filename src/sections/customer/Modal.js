import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { AccountProfile } from 'src/sections/account/account-profile';
import { AccountProfileDetails } from 'src/sections/account/account-profile-details';



function MyModal({ open, handleClose }) {
    return (
        <Dialog open={open}  maxWidth="lg" fullWidth >
            <DialogTitle>Add Individual</DialogTitle>
            <DialogContent style={{ width: '80vw', maxHeight: '80vh' }} >
                {/* Add your modal content here */}
                {/* <p>This is your modal content.</p> */}
                
                    <Head>
                        <title>
                            Account | FOA
                        </title>
                    </Head>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            py: 8
                        }}
                    >
                        <Container maxWidth="spacing">
                            <Stack spacing={3}>
                                <div>
                                    <Typography variant="h4">
                                        Account
                                    </Typography>
                                </div>
                                <div>
                                    <Grid
                                        container
                                        spacing={3}
                                    >
                                        {/* <Grid
                                            xs={12}
                                            md={6}
                                            lg={4}
                                        > */}
                                            {/* <AccountProfile /> */}
                                        {/* </Grid> */}
                                        <Grid
                                            xs={12}
                                            md={6}
                                            lg={8}
                                        >
                                            <AccountProfileDetails />
                                        </Grid>
                                    </Grid>
                                </div>
                            </Stack>
                        </Container>
                    </Box>


            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default MyModal;
