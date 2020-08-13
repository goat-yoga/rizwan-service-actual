import React from "react";
import Universal_Banner from "./Universal_Banner.jsx";
import Header from "./Header.jsx";
import Main_Nav from "./Main_Nav.jsx";

function App(props) {
  return (
    <div>
      <Universal_Banner />
      <Header />
      <Main_Nav />
    </div>
  );
}

export default App;
