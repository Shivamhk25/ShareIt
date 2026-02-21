import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!post || !post.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user && user.result && user.result.name }, history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user && user.result && user.result.name }));
      clear();
    }
  };

  if (!user || !user.result || !user.result.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center" style={{ color: '#ffffff' }}>
          Please Sign In to share your moments with the world 🌟
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6" style={{ color: '#ffffff', fontWeight: 600, marginBottom: '15px' }}>
          {currentId ? `✏️ Editing "${post && post.title}"` : '✨ Share a Moment'}
        </Typography>
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
        />
        <TextField 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth 
          multiline 
          rows={4} 
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
        />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags (press enter to add)"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          size="large" 
          type="submit" 
          fullWidth
          startIcon={<AddCircleOutlineIcon />}
        >
          {currentId ? 'Update' : 'Share'}
        </Button>
        <Button 
          variant="outlined" 
          size="small" 
          onClick={clear} 
          fullWidth
          startIcon={<ClearIcon />}
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            textTransform: 'none',
          }}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
