import { useState } from "react";
import axios from "axios";

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
        <>
            <h3 data-testid="description">{pic.title}</h3>
            {!isClicked ?
                <li key={key} data-testid="galleryItem"><img data-testid="toggle" src={pic.url} onClick={toggleDisplay}/></li>
                :
                <li key={key} data-testid="galleryItem"><p data-testid="toggle" onClick={toggleDisplay}> {pic.description}</p></li>
            }
            <button data-testid="like" onClick={() => updateLikes(pic.id)}>Love it!</button>
            {pic.likes === 1 ?
                <p>{pic.likes} person loves this!</p>
                :
                <p>{pic.likes} people love this!</p>
            }

        </>
    );
}

export default GalleryItem;