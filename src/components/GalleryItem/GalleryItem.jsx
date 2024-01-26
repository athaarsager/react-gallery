import { useState } from React;
import axios from "axios";

function GalleryItem( {getPics, pic, key} ) {

    const [isClicked, setIsClicked] = useState(false);
 
    const toggleDisplay = () => setIsClicked(!isClicked)

    const updateLikes = (picId) => {
        const picId = pic.id
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
        <li onClick={toggleDisplay}>{pic}</li>
        <button onClick={updateLikes}>Love it!</button>
        </>
    );
}

export default GalleryItem;