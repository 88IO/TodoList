import React from "react";

function TodoItem(props) {
  return (
    <li>
      {props.title}
      &nbsp;
      <a href="#" id={props.id} onClick={props.delTodo}>✗</a>
    </li>
  );
}

export default TodoItem;
