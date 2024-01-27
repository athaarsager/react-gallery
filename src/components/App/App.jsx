import Form from "../Form/Form";
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
        <Form/>
        <GalleryList/>
        </main>
      </div>
    );
}

export default App;
