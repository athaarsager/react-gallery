import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
function GalleryForm() {
    return (
        <div>
            <Form>
                <Row>
                    <Col md={{ span: 3, offset: 1}}>
                        <Form.Group controlId="formImageUrl">
                            <Form.Label><strong>Add a New Picture Here!</strong></Form.Label>
                            <Form.Control type="url" placeholder="https://i.imgur.com/J5re04j.png" />
                        </Form.Group>
                        <Button variant="secondary" type="Submit" className="my-2">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default GalleryForm;