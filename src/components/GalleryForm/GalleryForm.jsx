import { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
function GalleryForm({getPics}) {

    const [picUrl, setPicUrl] = useState("");
    const [picTitle, setPicTitle] = useState("");
    const [picDescription, setPicDescription] = useState("");

    const addNewPic = (e) => {
        e.preventDefault();
        axios.post("/api/gallery", {url: picUrl, title: picTitle, description: picDescription})
        .then(() => {
            getPics();
            setPicUrl("");
            setPicTitle("");
            setPicDescription("");
        })
        .catch((error) => {
            console.error("Error in Client POST:", error);
        })
    }

    return (
        <div>
            <Form onSubmit={addNewPic}>
                <Row>
                    <Col md={{ span: 3, offset: 1}}>
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
                        <Button variant="secondary" type="Submit" className="my-2">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default GalleryForm;