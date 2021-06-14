import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Chart } from "./components"

const Countries = () => {

    const [countriesList, setCountriesList] = useState();

    //Obtengo info de mi base de datos local
    useEffect(() => {
        axios.get('http://localhost:3050/countries').then((response) => {
            setCountriesList(response.data);
        })
    }, []);

    return (
        <div>
            <h3 style={{ backgroundColor: 'rgb(87, 234, 154)', textAlign: 'center', marginBottom: '5vh', marginTop: '5vh' }}>Paises que registran contagios</h3>
            <div style={{ display: "flex" }}>
                {countriesList && (
                    <List data={countriesList} />
                )}
                {countriesList && (
                    <Chart data={countriesList} />
                )}
            </div>
        </div>

    )
}

export { Countries }