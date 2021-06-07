import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap'
import { infected } from "../../../../../api/infected";

const InfoTable = () => {

    const [infectedPeople, setInfectedPeople] = useState();

    useEffect(() => {
        infected.getInfected().then((response) => {
            setInfectedPeople(response);
        })
    }, []);

    console.log(infectedPeople)

    const totalInfected = infectedPeople && infectedPeople.length;

    const getDate = (miliseconds) => {
        const completeDate = new Date(miliseconds * 1000);
        const year = completeDate.getFullYear();
        const month = completeDate.getMonth() + 1;
        const day = completeDate.getDate();
        const date = `${day} / ${month} / ${year}`;
        return (date)
    }

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const today = `${day} / ${month} / ${year}`;


    const loadTable = (list) => {
        return (list && list.map((infected) => (
            <tr key={infected.id} style={{ backgroundColor: `${infected.live ? "white" : "rgba(255, 99, 132, 0.4)"}` }}>
                <td>{getDate(`${infected.infect_date}`)}</td>
                <td>{infected.first_name}</td>
                <td>{infected.last_name}</td>
                <td>{infected.age}</td>
                <td>{infected.country}</td>
                <td>{infected.female ? "Femenino" : "Masculino"}</td>
            </tr>
        )))
    }

    const ordenar = () => {
        infectedPeople.sort(function (a, b) {
            return a.age - b.age;
        });
        console.log(infectedPeople)
        const table = document.getElementById('dataTable');
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        loadTable(infectedPeople);
    }

    console.log(infectedPeople)

    return (
        <div>
            <h3 style={{ backgroundColor: 'rgb(87, 234, 154)', textAlign: 'center', marginBottom: '5vh' }}>Cantidad de infectados al dia {today}: {totalInfected}</h3>
            <div style={{ width: '80%', margin: 'auto' }}>
                <Table id="dataTable" bordered hover>
                    <thead>
                        <tr>
                            <th>Fecha contagio</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad<Button style={{ padding: '0', marginLeft: '10px' }} variant="link" onClick={() => ordenar()}>▼</Button></th>
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