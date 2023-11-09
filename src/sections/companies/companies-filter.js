import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

export default function Filter() {
    return (
        <Autocomplete
            id="filter-demo"
            options={rowHeadings}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Student by" />}
        />
    );
}

const rowHeadings = [
    { title: 'Student Name' },
    { title: 'Student EMAIL' },
    { title: 'Student Location' },
    { title: 'Student Signed Up Date' },
   
];