import React from 'react';
import ReactDom from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeader/TodoHeader';
import TodoListContainer from '../../containers/TodoList/TodoList';

const Main = () => (
  <div>
    <TodoHeaderContainer />
    <TodoListContainer />
  </div>
);

export default Main;
