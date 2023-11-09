import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Typography } from '@mui/material';
import { SvgIcon } from '@mui/material';
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MyModal from './Modal'; // Import the Modal component
import MyModal1 from './Modal1';

function DropdownButton() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // Add a state for the modal
    const [modal2Open, setModal2Open] = useState(false); // Add a state for the second modal

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openModal = () => {
        setModalOpen(true);
        handleClose(); // Close the dropdown when opening the modal
    };
    const openModal2 = () => {
        setModal2Open(true);
        handleClose(); // Close the dropdown when opening the second modal
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const closeModal2 = () => {
        setModal2Open(false);
    };

    return (
        <div>
            <Typography>
                <Button
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <ChevronDownIcon />
                        </SvgIcon>
                    )}
                    variant="contained"
                    onClick={handleClick}
                >
                    Add
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={openModal}>Add Individual</MenuItem>
                    <MenuItem onClick={openModal2}>Import As CSV</MenuItem>
                </Menu>
            </Typography>

            {/* Render the modal component */}
            <MyModal open={modalOpen} handleClose={closeModal} />
            <MyModal1 open={modal2Open} handleClose={closeModal2} />
        </div>
    );
}

export default DropdownButton;
