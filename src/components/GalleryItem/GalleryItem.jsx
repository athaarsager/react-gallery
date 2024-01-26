import { useState } from "react";
import axios from "axios";

function GalleryItem( {getPics, pic, key} ) {

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
        { isClicked ?
        <>
        <li onClick={toggleDisplay}>{pic}</li>
        </>
        :
        <li onClick={toggleDisplay}> {pic.description} </li>
        }
         <button onClick={() => updateLikes(pic.id)}>Love it!</button>
        </>
    );
}

export default GalleryItem;