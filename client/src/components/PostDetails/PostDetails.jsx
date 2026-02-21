import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Chip, Box } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/moment/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" style={{ color: '#667eea' }} />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ 
      padding: '30px', 
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2" style={{ color: '#ffffff', fontWeight: 700, marginBottom: '20px' }}>
            {post.title}
          </Typography>
          
          <Box display="flex" gap={1} flexWrap="wrap" marginBottom={2}>
            {post.tags.map((tag, index) => (
              <Chip 
                key={index}
                label={`#${tag}`}
                component={Link}
                to={`/explore/${tag}`}
                clickable
                style={{
                  background: 'rgba(102, 126, 234, 0.3)',
                  color: '#ffffff',
                  border: '1px solid rgba(102, 126, 234, 0.5)',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          <Box display="flex" alignItems="center" gap={3} marginBottom={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <FavoriteIcon style={{ color: '#667eea', fontSize: '1.2rem' }} />
              <Typography variant="body1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
              </Typography>
            </Box>
            <Typography variant="body1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {moment(post.createdAt).fromNow()}
            </Typography>
          </Box>

          <Typography gutterBottom variant="body1" component="p" style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '30px'
          }}>
            {post.message}
          </Typography>

          <Typography variant="h6" style={{ color: '#667eea', marginBottom: '10px' }}>
            Created by:{' '}
            <Link to={`/profile/${post.name}`} style={{ textDecoration: 'none', color: '#764ba2', fontWeight: 600 }}>
              {post.name}
            </Link>
          </Typography>

          <Divider style={{ margin: '30px 0', background: 'rgba(255, 255, 255, 0.2)' }} />
          <CommentSection post={post} />
          <Divider style={{ margin: '30px 0', background: 'rgba(255, 255, 255, 0.2)' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5" style={{ color: '#ffffff', fontWeight: 600, marginTop: '30px' }}>
            You might also like:
          </Typography>
          <Divider style={{ margin: '20px 0', background: 'rgba(255, 255, 255, 0.2)' }} />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.slice(0, 4).map(({ title, name, message, likes, selectedFile, _id }) => (
              <div 
                style={{ 
                  margin: '20px', 
                  cursor: 'pointer',
                  padding: '15px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }} 
                onClick={() => openPost(_id)} 
                key={_id}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Typography gutterBottom variant="h6" style={{ color: '#ffffff', fontWeight: 600 }}>{title}</Typography>
                <Typography gutterBottom variant="subtitle2" style={{ color: '#667eea' }}>{name}</Typography>
                <Typography gutterBottom variant="body2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {message.length > 60 ? `${message.substring(0, 60)}...` : message}
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  ❤️ {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                </Typography>
                {selectedFile && <img src={selectedFile} style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} alt={title} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;
