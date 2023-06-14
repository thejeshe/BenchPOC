import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const GetTextBox = (props) => {
  const {
    error = false,
    disabled,
    id,
    name,
    label = "test",
    pattern = /^([a-z0-9]{4,})$/,
    type = "textbox",
    validationError,
    formData={},
    onDependent,
    layout = 2,
    isMandatory = false
  } = props;
  const [textValue, setTextValue] = useState(formData[name]);
  const [textError, setTextError] = useState(error);

  return <Grid item xs={12} sm={12/layout} lg={12/layout}>
    <FormControl fullWidth>
      <label>{isMandatory && "*"}{label}</label>
      <TextField
        error={textError}
        type={type}
        id={id}
        name={name}
        variant="standard"
        value={textValue}
        helperText={textError && validationError}
        disabled={(onDependent && !formData[onDependent]) || disabled}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
        onBlur={() => {
          if (pattern) {
            setTextError(!pattern.test(textValue));
          }
        }}
      />
    </FormControl>
    </Grid>
}

export default GetTextBox;
