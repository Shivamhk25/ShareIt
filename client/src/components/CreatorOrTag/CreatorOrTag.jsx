import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import Post from '../Posts/Post/Post';
import { getPostsByCreator, getPostsBySearch } from '../../actions/posts';

const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  const location = useLocation();
  const isExplore = location.pathname.startsWith('/explore');

  useEffect(() => {
    if (isExplore) {
      dispatch(getPostsBySearch({ tags: name }));
    } else {
      dispatch(getPostsByCreator(name));
    }
  }, [name, isExplore]);

  if (!posts.length && !isLoading) {
    return (
      <Box 
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        <Typography variant="h4" style={{ color: '#ffffff', marginBottom: '20px' }}>
          {isExplore ? '🔍 No posts found with this tag' : '👤 No posts from this creator'}
        </Typography>
        <Typography variant="body1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Be the first to create content {isExplore ? `with #${name}` : `as ${name}`}!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box 
        display="flex" 
        alignItems="center" 
        gap={2} 
        marginBottom={3}
        padding="20px"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        {isExplore ? (
          <LocalOfferIcon style={{ color: '#667eea', fontSize: '2.5rem' }} />
        ) : (
          <PersonIcon style={{ color: '#667eea', fontSize: '2.5rem' }} />
        )}
        <Box>
          <Typography variant="h3" style={{ color: '#ffffff', fontWeight: 700 }}>
            {isExplore ? `#${name}` : name}
          </Typography>
          <Typography variant="body1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {posts.length} {posts.length === 1 ? 'moment' : 'moments'} shared
          </Typography>
        </Box>
      </Box>
      
      <Divider style={{ margin: '30px 0', background: 'rgba(255, 255, 255, 0.2)' }} />
      
      {isLoading ? (
        <Box display="flex" justifyContent="center" padding="40px">
          <CircularProgress style={{ color: '#667eea' }} size={60} />
        </Box>
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CreatorOrTag;
