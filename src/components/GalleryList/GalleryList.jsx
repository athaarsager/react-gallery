import axios from "axios";
import React from "react";
import { useState } from React;

function GalleryList() {

    const [picList, setPicList] = useState([]);

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

    return(
        <>
        <ul>

        </ul>
        </>
    );
}

export default GalleryList;