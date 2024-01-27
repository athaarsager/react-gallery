import { useState } from "react";
import axios from "axios";
import {Col, Button} from "react-bootstrap";

function GalleryItem({ getPics, pic}) {

    const [isClicked, setIsClicked] = useState(false);

    const toggleDisplay = () => setIsClicked(!isClicked)

    const updateLikes = (picId) => {
        axios.put(`/api/gallery/like/${picId}`)
            .then(() => {
                getPics();
            })
            .catch((error) => {
                console.error("Error in client PUT:", error);
            });
    }

    return (
        <Col xs={4} className="d-flex justify-content-center align-items-center" data-testid="galleryItem">
            <div id="pic-display" className="d-flex flex-column align-items-center">
            <h3>{pic.title}</h3>
            {!isClicked ?
                <div className="pic-container d-flex align-items-center" data-testid="toggle" onClick={toggleDisplay}><img src={pic.url} /></div>
                :
                <div className="pic-container d-flex align-items-center" data-testid="toggle" onClick={toggleDisplay}><p data-testid="description"> {pic.description}</p></div>
            }
            <div className="my-2">
            <Button variant="primary" className="mx-1"data-testid="like" onClick={() => updateLikes(pic.id)}>Love it!</Button>
            <Button variant="secondary" className="mx-1" >Delete it</Button>
            </div>
            {pic.likes === 1 ?
                <p>{pic.likes} person loves this!</p>
                :
                <p>{pic.likes} people love this!</p>
            }
            </div>

        </Col>
    );
}

export default GalleryItem;