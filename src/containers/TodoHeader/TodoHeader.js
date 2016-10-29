import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
// import TodoHeader from '../../components/TodoHeader';

import {
  changeText,
  createTodo,
} from '../../actions';

const mapStateToProps = (state) => ({
  todo: state.getIn(['todo', 'todo'])
});

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (event) => (
    dispatch(changeText({text: event.target.value}))
  ),
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({text: ''}));
  }
});

const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo,
}) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" value={todo.get('text')} onChange={onChangeText} />
    <button onClick={onCreateTodo}>Submit</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoHeader);
