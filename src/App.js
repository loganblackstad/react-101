import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card name="Project Awesome" likes={0}></Card>
    </div>
  );
}

export default App;
