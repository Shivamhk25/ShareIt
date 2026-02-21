import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'darken',
    borderRadius: '20px 20px 0 0',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '20px',
    height: '100%',
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 60px 0 rgba(102, 126, 234, 0.4)',
      border: '1px solid rgba(102, 126, 234, 0.5)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    },
    '&:hover::before': {
      opacity: 1,
    },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    zIndex: 2,
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    zIndex: 2,
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    fontWeight: 700,
    fontSize: '1.3rem',
    color: '#ffffff',
    marginTop: '12px',
  },
  cardActions: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(255, 255, 255, 0.05)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
}));
