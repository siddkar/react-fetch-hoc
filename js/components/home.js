import React from 'react';
import Todos from './todos';
import Posts from './posts';
import fetchApiHoc from '../containers/fetchapihoc';

let EnhancedTodos = fetchApiHoc(Todos, 'todos');
let EnhancedPosts = fetchApiHoc(Posts, 'posts');

const Home = (props) => (
    <div>
        <EnhancedTodos />
        <EnhancedPosts />
    </div>
);

export default Home; 