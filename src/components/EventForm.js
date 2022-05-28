import React, { useState } from "react";
import { CREATE_EVENT } from "../actions";
import { DELETE_ALL_EVENTS } from "../actions";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // addEventを発火させるとページ全体がリロードされてしまう
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    // dispatchはactionを引数でとる
    // actionはindex.jsのCREATE_EVENT({ title: action.title, body: action.body })
    // actionにはtypeの他にもtitleとbodyも必要
    // titleとbodyは入力されたものを使用する。
    setTitle("");
    setBody(""); // stateのset〇〇に空文字を入れることで、投稿後リセットされるようになる
  };
  console.log({ state });

  const deleteAllEvents = (e) => {
    // e.preventDefaultはボタンを押した際にレンダリング(submit)される初期設定をなくすもの
    e.preventDefault();
    const result = window.confirm("本当に削除しますか？");
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          {/* bootStrapでは、forがhtmlForになる */}
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // e.target.valueは慣用句として覚える
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          disabled={unCreatable}
          onClick={(e) => addEvent(e)}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          disabled={state.length === 0}
          onClick={(e) => deleteAllEvents(e)}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
