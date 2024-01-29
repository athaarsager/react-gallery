import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryList from "../GalleryList/GalleryList";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

function App() {

  const [picList, setPicList] = useState([]);

  const getPics = () => {
    axios.get("/api/gallery")
      .then((response) => {
        setPicList(response.data);
      })
      .catch((error) => {
        console.error("Error in client GET:", error);
      });
  }
  return (
    <Router>
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
          <nav>
            <ul>
              <li><NavLink>Gallery</NavLink></li>
              <li><NavLink>Form</NavLink></li>
              <li><NavLink>About</NavLink></li>
            </ul>
          </nav>
        </header>
        <p id="info-text"><em>Click an image to see its description and vice versa!</em></p>
        <main>
          <GalleryForm
            getPics={getPics}
          />
          <GalleryList
            getPics={getPics}
            picList={picList}
          />
        </main>
      </div>
    </Router>
  );
}

export default App;
