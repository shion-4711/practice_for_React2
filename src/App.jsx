import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoTxt, setTodoTxt] = useState("");
  const [incompleteTodoList, setIncomleteTodoList] = useState([]);
  const [completeTodoList, setComleteTodoList] = useState([]);

  const onChangeTodoTxt = (event) => setTodoTxt(event.target.value);
  const onClickAdd = () => {
    if (todoTxt === "") {
      return;
    }
    const newTodoList = [...incompleteTodoList, todoTxt];
    setIncomleteTodoList(newTodoList);
    setTodoTxt("");
  };
  const onClickDelete = (index) => {
    const newTodoList = [...incompleteTodoList];
    newTodoList.splice(index, 1);
    setIncomleteTodoList(newTodoList);
  };
  const onClickComplete = (index) => {
    const newTodoList = [...incompleteTodoList];
    const newDoneList = [...completeTodoList, incompleteTodoList[index]];
    newTodoList.splice(index, 1);
    setIncomleteTodoList(newTodoList);
    setComleteTodoList(newDoneList);
  };
  const onClickRemove = (index) => {
    const newDoneList = [...completeTodoList];
    const newTodoList = [...incompleteTodoList, newDoneList[index]];
    newDoneList.splice(index, 1);
    setIncomleteTodoList(newTodoList);
    setComleteTodoList(newDoneList);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Input your things to do"
          value={todoTxt}
          onChange={onChangeTodoTxt}
        />
        <button onClick={onClickAdd}>ADD</button>
      </div>
      <div className="incomplete-area">
        <p className="title">TODO</p>
        <ul>
          {incompleteTodoList.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>DONE</button>
                <button onClick={() => onClickDelete(index)}>DELETE</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">DONE</p>
        <ul>
          {completeTodoList.map((done, index) => {
            return (
              <div key={done} className="list-row">
                <li>{done}</li>
                <button onClick={() => onClickRemove(index)}>REMOVE</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
