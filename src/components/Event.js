import React from "react";
import { DELETE_EVENT } from "../actions";

const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteButton = (e) => {
    const result = window.confirm(`(id=${id})本当に削除しますか？`);
    if (result) dispatch({ type: DELETE_EVENT, id });
  };
  // 今の状態だと、event(ボタンを押すこと)が投稿しかできない。削除とは区別する必要がある
  // event.idでもいいが、元々あるものを使った方がいい
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
