import React from 'react';
import Grid from '@mui/material/Grid';
import GetTextBox from './components/textbox';
import GetSelect from './components/select';

const App = ({text}) => {
    console.log("Aoo formbuilder");
    return <Grid container spacing={2}><GetTextBox /><GetSelect />
    </Grid>
};

export default App;
