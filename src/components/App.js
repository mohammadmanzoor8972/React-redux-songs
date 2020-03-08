import React from "react";
import "./styles.css";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="content">
      <SongList />
      <SongDetail />
    </div>
  );
};

export default App;
