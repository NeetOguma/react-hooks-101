import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import Event from "../components/Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // addEventを発火させるとページ全体がリロードされてしまう
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
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

  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={(e) => addEvent(e)}>
          イベントを作成する
        </button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {/* mapでコンポーネントを回す時は中のコンポーネントをユニークなものにしないといけない */}
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
