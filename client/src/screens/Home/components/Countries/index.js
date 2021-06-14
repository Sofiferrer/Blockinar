import React, { useEffect, useState } from "react";
import { countries } from "../../../../api/countries"
import { List, Chart } from "./components"

const Countries = () => {

    const [countriesList, setCountriesList] = useState();

    //Obtengo info de API proporcionada
    useEffect(() => {
        countries.getCountries().then((response) => {
            setCountriesList(response);
        })
    }, []);

    //Obtengo info de mi base de datos local **Acceder desde branch localDatabase**
    // useEffect(() => {
    //     axios.get('http://localhost:3050/countries').then((response) => {
    //         console.log(response.data)
    //         setCountriesList(response.data);
    //     })
    // }, []);

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