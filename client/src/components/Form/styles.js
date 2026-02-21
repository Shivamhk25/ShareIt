import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    '& .MuiChip-root': {
      background: 'rgba(102, 126, 234, 0.3)',
      color: '#ffffff',
      border: '1px solid rgba(102, 126, 234, 0.5)',
    },
  },
  paper: {
    padding: theme.spacing(3),
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    borderRadius: '20px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    '& input': {
      color: '#ffffff',
    },
  },
  buttonSubmit: {
    marginBottom: 10,
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
}));
