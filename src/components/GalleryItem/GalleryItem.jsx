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
            {!isClicked ?
                <li key={key} onClick={toggleDisplay}><img src={pic.url} /></li>
                :
                <li onClick={toggleDisplay}> {pic.description} </li>
            }
            <button onClick={() => updateLikes(pic.id)}>Love it!</button>
            {pic.likes === 1 ?
                <p>{pic.likes} person loves this!</p>
                :
                <p>{pic.likes} people love this!</p>
            }

        </>
    );
}

export default GalleryItem;