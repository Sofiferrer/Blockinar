import React, { useEffect, useState } from "react";
import { countries } from "../../../../api/countries"
import "./style.css";

const Countries = () => {

    const [countriesList, setCountriesList] = useState();

    useEffect(() => {
        countries.getCountries().then((response) => {
            setCountriesList(response);
        })
    }, []);

    //console.log(countriesList)

    return (
        <div>
            <h1>Countries</h1>
            {countriesList && countriesList.map((country) => (
                <h2 key={country.id}>{country.name.split('(', 1)}</h2>
            ))}
        </div>
    )
}

export { Countries }