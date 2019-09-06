import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, red 30%, black 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const StyledButtonForReset = styled(Button)({
  background: 'linear-gradient(45deg, pink 10%, orange 90%)',
  border: 3,
  borderRadius: 8,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  marginLeft: '10px',
  padding: '0 30px',
});

export { StyledButton, StyledButtonForReset };
