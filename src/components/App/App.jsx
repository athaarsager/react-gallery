import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryList from "../GalleryList/GalleryList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        <main>
        <GalleryForm/>
        <GalleryList/>
        </main>
      </div>
    );
}

export default App;
