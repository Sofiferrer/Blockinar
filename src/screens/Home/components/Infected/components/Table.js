import React, { useState } from "react";
import { Table, Button } from 'react-bootstrap'

const InfoTable = ({ data }) => {

    const [infectedPeople, setInfectedPeople] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc');

    const totalInfected = infectedPeople && infectedPeople.length;

    const stringifyDate = (miliseconds) => {
        const completeDate = new Date(miliseconds * 1000);
        const year = completeDate.getFullYear();
        const month = completeDate.getMonth() + 1;
        const day = completeDate.getDate();
        const date = `${day} / ${month} / ${year}`;
        return (date)
    }

    const getCurrentDate = () => {
        const newDate = new Date();
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        return `${day} / ${month} / ${year}`;
    }

    const loadTable = (list) => {
        return (list && list.map((infected) => (
            <tr key={infected.id} style={{ backgroundColor: `${infected.live ? "white" : "rgba(255, 99, 132, 0.4)"}` }}>
                <td>{stringifyDate(`${infected.infect_date}`)}</td>
                <td>{infected.first_name}</td>
                <td>{infected.last_name}</td>
                <td>{infected.age}</td>
                <td>{infected.country}</td>
                <td>{infected.female ? "Femenino" : "Masculino"}</td>
            </tr>
        )))
    }

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