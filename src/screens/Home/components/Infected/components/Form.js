import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { api } from "../../../../../api/api"

const ModalForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState('');
    const [live, setLive] = useState('');
    const [female, setFemale] = useState('');

    const infectedPerson = {
        first_name: firstName,
        last_name: lastName,
        country: country,
        live: live,
        age: age,
        female: female
    }

    const handleSubmit = async () => {
        await api({
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            url: "/infected",
            body: JSON.stringify(infectedPerson),
        })
        console.log(infectedPerson)
        handleClose();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button variant="info" onClick={handleShow}>
                Agregar infectado
            </Button>
            <div>
                <ReactHTMLTableToExcel
                    id='exportButton'
                    className='btn btn-success'
                    table='dataTable'
                    filename='Tabla-Infectados'
                    sheet='Infectados'
                    buttonText='Exportar'
                />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Complete el formulario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="name" id="name" placeholder="Nombre" onChange={(event) => setFirstName(event.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="lastName" id="lastName" placeholder="Apellido" onChange={(event) => setLastName(event.target.value)} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Form.Control type="number" name="age" id="age" placeholder="Edad" onChange={(event) => setAge(event.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="country" id="country" placeholder="Pais" onChange={(event) => setCountry(event.target.value)} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Form.Label style={{ marginRight: "20px" }}>Sexo:</Form.Label>
                                <Form.Check inline label="Mujer" name="group1" type="radio" aria-label="mujer" value="true" onChange={(event) => setFemale(event.target.value)} />
                                <Form.Check inline label="Hombre" name="group1" type="radio" aria-label="hombre" value="false" onChange={(event) => setFemale(event.target.value)} />
                            </Col>
                            <Col>
                                <Form.Label style={{ marginRight: "40px" }}>Vive:</Form.Label>
                                <Form.Check inline label="Si" name="group2" type="radio" aria-label="siVive" value="true" onChange={(event) => setLive(event.target.value)} />
                                <Form.Check inline label="No" name="group2" type="radio" aria-label="noVive" value="false" onChange={(event) => setLive(event.target.value)} />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="info" onClick={handleSubmit}>Agregar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export { ModalForm };