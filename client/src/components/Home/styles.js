import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 15,
    marginBottom: '1.5rem',
    display: 'flex',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
  pagination: {
    borderRadius: 15,
    marginTop: '1.5rem',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    display: 'flex',
    justifyContent: 'center',
    '& .MuiPaginationItem-root': {
      color: '#ffffff',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      '&:hover': {
        background: 'rgba(102, 126, 234, 0.2)',
        borderColor: 'rgba(102, 126, 234, 0.5)',
      },
      '&.Mui-selected': {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderColor: 'transparent',
        color: '#ffffff',
        fontWeight: 600,
      },
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
