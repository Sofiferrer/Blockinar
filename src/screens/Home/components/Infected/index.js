import React, { useState, useEffect } from "react";
import { Chart, InfoTable, ModalForm } from "./components"
import { infected } from "../../../../api/infected";

const Infected = () => {

    const [infectedPeople, setInfectedPeople] = useState();

    useEffect(() => {
        infected.getInfected().then((response) => {
            setInfectedPeople(response);
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