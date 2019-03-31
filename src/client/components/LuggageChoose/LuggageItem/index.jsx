import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import './luggageItem.less';

const LuggageItem = ({ luggage: { name, weight }, onAddData, order }) => (
  <div className="luggageItem-content">
    <p>{order + 1}</p>
    <TextField
      id="outlined-uncontrolled"
      label="Luggage"
      value={name}
      // className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={({ target: { value } }) => onAddData(value, order, 'name')}
    />
    <TextField
      id="outlined-uncontrolled"
      label="Weight"
      value={+weight || ''}
      // className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={({ target: { value } }) => onAddData(value, order, 'weight')}
      InputProps={{
        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
      }}
    />
  </div>
);
LuggageItem.propTypes = {
  onAddData: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  luggage: PropTypes.shape({
    name: PropTypes.string,
    weight: PropTypes.number,
  }).isRequired,

};

export default LuggageItem;
