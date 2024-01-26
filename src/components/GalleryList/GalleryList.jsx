import axios from "axios";
import { useState } from React;
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList() {

    const [picList, setPicList] = useState([]);
    //may need useEffect
    const getPics = () => {
        axios.get("/api/gallery")
            .then((response) => {
                setPicList(response.data);
                console.log(picList);
            })
            .catch((error) => {
                console.error("Error in client GET:", error);
            });
    }

    return (
        <>
            <ul>
                {picList.map((pic) => (
                    <GalleryItem
                        getPics={getPics}
                        pic={pic}
                    />
                ))}
            </ul>
        </>
    );
}

export default GalleryList;