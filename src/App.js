import React from "react";
import "./App.css";
import { orginals, actions, horrors, romance, comedy} from "./urls";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginals" />
      <RowPost url={actions} title="Actions" isSmall />
      <RowPost url={horrors} title="Horrors" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <Footer/>
    </div>
  );
}

export default App;
