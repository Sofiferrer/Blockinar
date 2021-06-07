import React, { useEffect, useState } from "react";
import { countries } from "../../../../../api/countries"

const List = () => {

    const [countriesList, setCountriesList] = useState();

    useEffect(() => {
        countries.getCountries().then((response) => {
            setCountriesList(response);
        })
    }, []);

    return (
        <div style={{ width: '50%' }}>
            <ul>
                {countriesList && countriesList.map((country) => (
                    <li key={country.id}>{country.name.split('(', 1)}</li>
                ))}
            </ul>
        </div>
    )
}

export { List }