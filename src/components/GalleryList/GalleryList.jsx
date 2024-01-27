import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import {Row} from "react-bootstrap";

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

    useEffect(() => {
        getPics();
    }, []);

    return (
        <div>
            <Row data-testid="galleryList">
                {picList.map((pic, index) => (
                    <GalleryItem
                        getPics={getPics}
                        pic={pic}
                        key={index}
                    />
                ))}
            </Row>
        </div>
    );
}

export default GalleryList;