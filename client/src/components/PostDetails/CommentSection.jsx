import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Typography variant="h5" style={{ color: '#ffffff', fontWeight: 600, marginBottom: '20px' }}>
        💬 Comments ({comments?.length || 0})
      </Typography>
      
      <Box className={classes.commentsOuterContainer}>
        <Box className={classes.commentsInnerContainer}>
          {comments?.length > 0 ? (
            comments.map((c, i) => (
              <Box 
                key={i} 
                style={{ 
                  marginBottom: '15px',
                  padding: '15px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="subtitle1" style={{ color: '#667eea', fontWeight: 600, marginBottom: '5px' }}>
                  {c.split(': ')[0]}
                </Typography>
                <Typography variant="body2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {c.split(':').slice(1).join(':')}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" style={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', padding: '20px' }}>
              No comments yet. Be the first to share your thoughts! 🎉
            </Typography>
          )}
          <div ref={commentsRef} />
        </Box>
        
        {user?.result && (
          <Box style={{ width: '70%' }}>
            <Typography variant="h6" style={{ color: '#ffffff', marginBottom: '15px', fontWeight: 600 }}>
              Share your thoughts
            </Typography>
            <TextField 
              fullWidth 
              rows={4} 
              variant="outlined" 
              label="Write a comment..." 
              multiline 
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
              InputProps={{
                style: { 
                  color: '#ffffff',
                  borderRadius: '12px',
                }
              }}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.7)' }
              }}
            />
            <Button 
              style={{ 
                marginTop: '15px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: 'white',
                padding: '12px 30px',
                borderRadius: '12px',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              }} 
              fullWidth 
              disabled={!comment.length} 
              variant="contained" 
              onClick={handleComment}
              endIcon={<SendIcon />}
            >
              Post Comment
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
