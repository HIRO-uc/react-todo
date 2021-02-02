import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickUndo } = props;

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickUndo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
