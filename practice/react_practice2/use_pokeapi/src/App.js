import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon-form/1/";
  const [loding, setLoding] = useState(true);
  const [] = useState();
  useEffect(() => {
    setLoding(true);
    axios.get(url).then((response) => {
      setLoding(false);
    });
  });
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
