import { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
function GalleryForm({getPics}) {

    const [picUrl, setPicUrl] = useState("");
    const [picTitle, setPicTitle] = useState("");
    const [picDescription, setPicDescription] = useState("");
    const history = useHistory();

    const addNewPic = (e) => {
        e.preventDefault();
        axios.post("/api/gallery", {url: picUrl, title: picTitle, description: picDescription})
        .then(() => {
            getPics();
            setPicUrl("");
            setPicTitle("");
            setPicDescription("");
            history.push("/");
        })
        .catch((error) => {
            console.error("Error in Client POST:", error);
        })
    }


    return (
        <div className="my-3">
            <Form onSubmit={addNewPic}>
                <Row>
                    <Col md={{ span: 12, offset: 0}}>
                        <h4>Add a New Picture Here!</h4>
                        <Form.Group controlId="formImageUrl">
                            <Form.Label className="my-1">Pic Url:</Form.Label>
                            <Form.Control type="url" placeholder="https://i.imgur.com/J5re04j.png" value={picUrl} onChange={(e) => setPicUrl(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group controlId="picTitle">
                            <Form.Label className="my-1">Title of Pic:</Form.Label>
                            <Form.Control type="text" placeholder="Awesome Title" value={picTitle} onChange={(e) => setPicTitle(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group controlId="picDescription">
                            <Form.Label className="my-1">Description of Pic:</Form.Label>
                            <Form.Control type="text" placeholder="Fun Description" value={picDescription} onChange={(e) => setPicDescription(e.target.value)} required/>
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                        <Button variant="warning" type="Submit" className="my-2">Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default GalleryForm;