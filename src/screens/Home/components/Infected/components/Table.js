import React, { useState } from "react";
import { Table, Button } from 'react-bootstrap'
import { getCurrentDate, loadTable } from "../../../../../helpers/functions";

const InfoTable = ({ data }) => {

    const [infectedPeople, setInfectedPeople] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc');

    const totalInfected = infectedPeople && infectedPeople.length;

    const order = () => {
        let tableData = [];
        if (sortOrder === 'asc') {
            tableData = infectedPeople.sort(function (a, b) {
                return a.age - b.age;
            });
            setSortOrder('desc')
        }
        if (sortOrder === 'desc') {
            tableData = infectedPeople.sort(function (a, b) {
                return a.age < b.age ? 1 : -1;
            });
            setSortOrder('asc')
        }
        setInfectedPeople([...tableData])
    }

    return (
        <div>
            <h3 style={{ backgroundColor: 'rgb(87, 234, 154)', textAlign: 'center', marginBottom: '5vh' }}>Cantidad de infectados al dia {getCurrentDate()}: {totalInfected}</h3>
            <div style={{ width: '80%', margin: 'auto' }}>
                <Table id="dataTable" bordered hover>
                    <thead>
                        <tr>
                            <th>Fecha contagio</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad<Button style={{ padding: '0', marginLeft: '10px' }} variant="link" onClick={() => order()}>▼</Button></th>
                            <th>Pais</th>
                            <th>Genero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadTable(infectedPeople)}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export { InfoTable }