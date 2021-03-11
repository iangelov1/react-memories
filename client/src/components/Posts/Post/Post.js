import React from 'react';

import { useSelector } from 'react-redux';

import useStyles from './styles';

const Post = () => {
    const classes = useStyles();

    const posts = useSelector((state) => state.posts);

    console.log(posts)
    
    return (
        <div>
            POST  
        </div>
    )
}

export default Post
