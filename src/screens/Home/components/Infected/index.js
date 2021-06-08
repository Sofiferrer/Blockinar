import React, { useState, useEffect } from "react";
import { BasicTable, Chart, InfoTable, ModalForm } from "./components"
import { infected } from "../../../../api/infected";

const Infected = () => {


    // const [infectedPeople, setInfectedPeople] = useState();

    // useEffect(() => {
    //     infected.getInfected().then((response) => {
    //         setInfectedPeople(response);
    //     })
    // }, []);

    const infectedPeople = [
        { "id": "1", "first_name": "Gudrun", "last_name": "Morissette", "country": "Denmark", "live": true, "age": 81297, "infect_date": 1622730652, "female": true },
        { "id": "2", "first_name": "Daphne", "last_name": "VonRueden", "country": "Bouvet Island (Bouvetoya)", "live": true, "age": 19834, "infect_date": 1622730592, "female": false },
        { "id": "3", "first_name": "Katlynn", "last_name": "Roob", "country": "Democratic People's Republic of Korea", "live": true, "age": 74185, "infect_date": 1622730532, "female": false }]
    console.log(infectedPeople)

    const COLUMNS = [
        {
            Header: 'Fecha contagio',
            accessor: 'infect_date'
        },
        {
            Header: 'Nombre',
            accessor: 'first_name',
        },
        {
            Header: 'Apellido',
            accessor: 'last_name',
        },
        {
            Header: 'Edad',
            accessor: 'age',
        },
        {
            Header: 'Pais',
            accessor: 'country',
        },
        {
            Header: 'Genero',
            accessor: 'female',
        }
    ]

    return (
        <div>
            <BasicTable datos={infectedPeople}
                columnas={COLUMNS} />
            <ModalForm />
            <Chart data={infectedPeople} />
        </div>
    )
}

export { Infected }