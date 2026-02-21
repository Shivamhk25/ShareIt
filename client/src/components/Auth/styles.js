import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    borderRadius: '20px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(102, 126, 234, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(102, 126, 234, 0.8)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiInputAdornment-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    width: theme.spacing(7),
    height: theme.spacing(7),
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '12px',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    '&:hover': {
      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    padding: '10px',
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(102, 126, 234, 0.5)',
    },
  },
}));
