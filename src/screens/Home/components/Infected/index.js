import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart, InfoTable, ModalForm } from "./components"
//import { infected } from "../../../../api/infected";

const Infected = () => {

    const [infectedPeople, setInfectedPeople] = useState();

    //Obtengo info de API proporcionada
    // useEffect(() => {
    //     infected.getInfected().then((response) => {
    //         setInfectedPeople(response);
    //     })
    // }, []);

    //Obtengo info de mi base de datos local
    useEffect(() => {
        axios.get('http://localhost:3050/infected').then((response) => {
            console.log(response.data)
            setInfectedPeople(response.data);
        })
    }, []);

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