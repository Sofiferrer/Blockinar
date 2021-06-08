import React from "react";
import { BasicTable, Chart, InfoTable, ModalForm } from "./components"

const Infected = () => {

    return (
        <div>
            <BasicTable />
            <ModalForm />
            <Chart />
        </div>
    )
}

export { Infected }