import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import EventForm from "../components/EventForm";
import Events from "./Events";

console.log({ AppContext });

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"ここだよ"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
