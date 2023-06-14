import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const GetSelect = (props) => {
  const {
    error = false,
    disabled,
    id,
    name = "test",
    label = "test",
    pattern = /^([a-z0-9]{4,})$/,
    type = "textbox",
    validationError,
    formData={
    testOptions:[{text:"ten",value:10},{text: "ten1", value: 20}]
    },
    onDependent,
    layout = 2,
    isMandatory = false
  } = props;
  const [textValue, setTextValue] = useState(formData[name] || "");

  const onChangeHandler = (event) => {
    console.log(event.target.value)
    setTextValue(event.target.value);
  }

  return <Grid item xs={12} sm={12/layout} lg={12/layout}>
  <FormControl fullWidth size="small">
    <label>{isMandatory && "*"}{label}</label>
    <Select
      error={validationError}
      type={type}
      id={id}
      name={name}
      value={textValue?.val}
      disabled={(onDependent && !formData[onDependent]) || disabled}
      onChange={onChangeHandler}
    >
        {formData[`${name}Options`].map((element,index) => <MenuItem value={element.value} key={index}>{element.text}</MenuItem>)}
        </Select>
    {validationError && <FormHelperText>{validationError}</FormHelperText>}
    </FormControl>
    </Grid>
}

export default GetSelect;
