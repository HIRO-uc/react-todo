import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // incompleteTodosは初期値として['ああああ', 'いいいい']の配列を持つ。
  // setIncompleteTodosはそれを変化させるための関数
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);
  return (
    // jsx記法ではclassNameでクラスを指定する
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              // mapなどでループしてレンダリングするときは、keyを設定する
              // reactは差分のみを仮想DOMに反映していくため、何個めの要素なのかを判定しなくてはならないから
              // keyを書かないとwarningが出る
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
