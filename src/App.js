import React, { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("これはレンダリングされると来る");
  });

  const renderPeriod = () => {
    console.log("renderPeriod render period");
    return "●";
  };

  useEffect(() => {
    console.log("これは初回だけ");
  }, []);

  useEffect(() => {
    console.log("これはnameが変わった時くる");
  }, [name]);
  // nameに関する変更が行われた時呼び出される

  return (
    <>
      <p>
        現在の{name}は{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};
App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
