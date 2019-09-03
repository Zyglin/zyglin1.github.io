// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  errorMessage: {
    color: 'green',
  },
  header: {
    color: 'white',
  },
  todoComponent: {
    backgroundColor: 'red',
  },
}));

const styles = {
  useStyles,
};

export default styles;
