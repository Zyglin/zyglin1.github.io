/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const counter = (props) => {
  const classes = useStyles();
  return (<div className="counter">
    <h1>{props.Count}</h1>
    <button style={styles.TodoComponent} onClick={props.Increment}>
      Increment
    </button>
    <button onClick={props.Decrement}>
      Decrement
    </button>
    <Button сlassName ={classes.button} variant="contained" color="secondary" onClick={props.Reset}>
      Reset
    </Button>
</div>);
};

export default counter;
