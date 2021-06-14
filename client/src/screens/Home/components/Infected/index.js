import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart, InfoTable, ModalForm } from "./components"

const Infected = () => {

    const [infectedPeople, setInfectedPeople] = useState();

    //Obtengo info de mi base de datos local
    useEffect(() => {
        axios.get('http://localhost:3050/infected').then((response) => {
            setInfectedPeople(response.data);
        })
    }, []);
    console.log(infectedPeople);

    return (
        <div>
            {infectedPeople && (
                <InfoTable data={infectedPeople} />
            )}
            <ModalForm />
            {infectedPeople && (
                <Chart data={infectedPeople} />
            )}
        </div>
    )
}

export { Infected }