import * as React from 'react';
import Chip from '@mui/material/Chip';
import { ThemeProvider } from '@mui/material/styles';
import { TypeTheme } from './TypeTheme';

const ChipType = ({ type }) => {

    return (
        <ThemeProvider theme={TypeTheme}>
            <Chip label={type.name} color={type.name} />
        </ThemeProvider>
    );
}; export default ChipType