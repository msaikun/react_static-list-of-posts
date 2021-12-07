import React from 'react';
import { PostInfo } from '../Post/Post';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList:React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <PostInfo {...post} />
        </div>
      ))}
    </div>
  );
};
