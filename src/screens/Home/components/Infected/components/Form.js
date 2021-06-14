import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
//import { api } from "../../../../../api/api"
import { getCurrentDate } from "../../../../../helpers/functions";

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

    // const infectedPerson = {
    //     first_name: firstName,
    //     last_name: lastName,
    //     country: country,
    //     live: live,
    //     age: age,
    //     female: female
    // }

    //Seteo datos a la API proporcionada
    // const handleSubmit = async () => {
    //     if (firstName && lastName) {
    //         await api({
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'Application/json'
    //             },
    //             url: "/infected",
    //             body: JSON.stringify(infectedPerson),
    //         })
    //         handleClose();
    //     } else {
    //         alert('Los campos Nombre y Apellido son obligatorios')
    //     }
    // }

    //Seteo datos a mi base de datos local
    const handleSubmit = () => {
        if (firstName && lastName) {
            axios.post("http://localhost:3050/api/infected", {
                first_name: firstName,
                last_name: lastName,
                country: country,
                live: live,
                age: age,
                infect_date: getCurrentDate(),
                gendre: female
            }).then(() => {
                console.log("Carga exitosa");
            });
            handleClose();
        } else {
            alert('Los campos Nombre y Apellido son obligatorios')
        }
    };

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
                    buttonText='Exportar Excel'
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
                                <Form.Control type="text" name="name" id="name"
                                    required placeholder="Nombre" onChange={(event) => setFirstName(event.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="lastName" id="lastName" required placeholder="Apellido" onChange={(event) => setLastName(event.target.value)} />
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
                                <Form.Check inline label="Mujer" name="group1" type="radio" aria-label="mujer" value="Mujer" onChange={(event) => setFemale(event.target.value)} />
                                <Form.Check inline label="Hombre" name="group1" type="radio" aria-label="hombre" value="Hombre" onChange={(event) => setFemale(event.target.value)} />
                            </Col>
                            <Col>
                                <Form.Label style={{ marginRight: "40px" }}>Vive:</Form.Label>
                                <Form.Check inline label="Si" name="group2" type="radio" aria-label="siVive" value="1" onChange={(event) => setLive(event.target.value)} />
                                <Form.Check inline label="No" name="group2" type="radio" aria-label="noVive" value="0" onChange={(event) => setLive(event.target.value)} />
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