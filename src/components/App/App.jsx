import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryList from "../GalleryList/GalleryList";
import {useState} from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
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
    );
}

export default App;
