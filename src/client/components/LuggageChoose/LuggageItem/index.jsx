import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import './luggageItem.less';

const styles = () => ({
  textField: {},
  notchedOutline: {
    boxSizing: 'border-box',
    borderWidth: '1px',
    borderRadius: '4px 0 0 4px',
    width: '211px',
    height: '50px',
  },
  notchedOutlineLast: {
    boxSizing: 'border-box',
    borderRadius: '0 4px 4px 0',
    height: '50px',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#1E88E5',
    },
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#1E88E5',
    },
  },
  cssFocused: {},

});

const LuggageItem = ({
  luggage: { name, weight }, onAddData, order, classes,
}) => (
  <div className="luggageItem-content">
    <p>{order + 1}</p>
    <TextField
      id="outlined-uncontrolled"
      label="Luggage"
      value={`${name}`}
      className={classes.textField}
      margin="dense"
      variant="outlined"
      onChange={({ target: { value } }) => onAddData(value, order, 'name')}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          notchedOutline: classes.notchedOutline,
          focused: classes.cssFocused,
        },
      }}
    />
    <TextField
      id="outlined-uncontrolled"
      label="Weight"
      value={+weight || ''}
      // className={classes.textField}
      margin="dense"
      error={weight && typeof weight !== 'number'}
      variant="outlined"
      onChange={({ target: { value } }) => onAddData(value, order, 'weight')}
      InputProps={{
        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        classes: {
          notchedOutline: classes.notchedOutlineLast,
          notchedOutlineLast: classes.notchedOutlineLast,
        },
      }}
    />
  </div>
);
LuggageItem.propTypes = {
  onAddData: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  luggage: PropTypes.shape({
    name: PropTypes.string,
    weight: PropTypes.number,
  }).isRequired,

};

export default withStyles(styles)(LuggageItem);
