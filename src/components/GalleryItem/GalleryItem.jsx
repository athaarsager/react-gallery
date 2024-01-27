import { useState } from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

function GalleryItem({ getPics, pic, key }) {

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
        <Col xs={4} className="d-flex justify-content-center" data-testid="galleryItem">
            <div>
            <h3>{pic.title}</h3>
            {!isClicked ?
                <div key={key} data-testid="toggle" onClick={toggleDisplay}><img src={pic.url} /></div>
                :
                <div key={key} data-testid="toggle" onClick={toggleDisplay}><p data-testid="description"> {pic.description}</p></div>
            }
            <button data-testid="like" onClick={() => updateLikes(pic.id)}>Love it!</button>
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