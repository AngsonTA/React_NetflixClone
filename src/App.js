import React from "react";
import "./App.css";
import {Action,Comedy,Horror,Originals, Romance} from './urls'
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";

function App() {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <RowPoster url= {Originals}  title='Netflix Originals' />
    <RowPoster url= {Action}     title='Action Movies' isSmall />
    <RowPoster url= {Comedy}     title='Comedy Movies' isSmall />
    <RowPoster url= {Romance}     title='Romance Movies' isSmall />
    <RowPoster url= {Horror}     title='Horror Movies' isSmall />
   </div>
  );
}

export default App;
