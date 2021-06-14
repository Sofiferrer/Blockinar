import React from "react";


const List = ({ data }) => {

    return (
        <div style={{ width: '50%' }}>
            <ul>
                {data.map((country) => (
                    <li key={country.id}>{country.name.split('(', 1)}</li>
                ))}
            </ul>
        </div>
    )
}

export { List }