import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import {Row} from "react-bootstrap";

function GalleryList({getPics, picList}) {

    //may need useEffect

    useEffect(() => {
        getPics();
    }, []);

    return (
        <div>
            <Row data-testid="galleryList">
                {picList.map((pic) => (
                    <GalleryItem
                        getPics={getPics}
                        pic={pic}
                        key={pic.id}
                    />
                ))}
            </Row>
        </div>
    );
}

export default GalleryList;