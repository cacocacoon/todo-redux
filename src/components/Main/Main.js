import React from 'react';
import ReactDom from 'react-dom';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

const Main = () => (
  <div>
    <TodoHeader />
    <TodoList />
  </div>
);

export default Main;
