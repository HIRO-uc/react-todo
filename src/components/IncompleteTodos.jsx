import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            // mapなどでループしてレンダリングするときは、keyを設定する
            // reactは差分のみを仮想DOMに反映していくため、何個めの要素なのかを判定しなくてはならないから
            // keyを書かないとwarningが出る
            // 関数に引数を渡す場合はそのままか書くのではなく、アロー関数で新たに関数を生成する必要がある
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
