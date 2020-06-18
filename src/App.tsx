import React from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar"
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavbar title="International Clocks"/>
        <Content />
      </header>
    </div>
  );
}

export default App;
