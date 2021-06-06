import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import { infected } from "../../../../api/infected";
import "./style.css";

const Infected = () => {

    const [infectedPeople, setInfectedPeople] = useState();

    useEffect(() => {
        infected.getInfected().then((response) => {
            setInfectedPeople(response);
        })
    }, []);

    console.log(infectedPeople)

    const ordenar = () => {
        infectedPeople.sort(function (prev, next) {
            return prev.age - next.age
        })
        console.log(infectedPeople)
    }

    // const dateObject = new Date(1622730652 * 1000)
    // const anio = dateObject.getFullYear();
    // const mes = dateObject.getMonth();
    // const dia = dateObject.getDate();

    // console.log(dateObject)
    // console.log(dia, mes, anio)


    return (
        <div>
            <h1>Infectados</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Fecha contagio</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad<button onClick={() => ordenar()}>O</button></th>
                        <th>Pais</th>
                        <th>Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {infectedPeople && infectedPeople.map((infected) => (
                        <tr key={infected.id} style={{ backgroundColor: `${infected.live ? "white" : "red"}` }}>
                            {/* <td>{new Date(`${infected.infect_date * 1000}`).getFullYear()}</td> */}
                            <td>FECHA</td>
                            <td>{infected.first_name}</td>
                            <td>{infected.last_name}</td>
                            <td>{infected.age}</td>
                            <td>{infected.country}</td>
                            <td>{infected.female ? "Femenino" : "Masculino"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    )
}

export { Infected }