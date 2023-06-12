import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";

function App() {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <RowPoster/>
   </div>
  );
}

export default App;
