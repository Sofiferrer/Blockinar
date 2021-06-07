import React from "react";
import { List, Chart } from "./components"

const Countries = () => {

    return (
        <div>
            <h3 style={{ backgroundColor: 'rgb(87, 234, 154)', textAlign: 'center', marginBottom: '5vh', marginTop: '5vh' }}>Paises que registran contagios</h3>
            <div style={{ display: "flex" }}>
                <List />
                <Chart />
            </div>
        </div>

    )
}

export { Countries }