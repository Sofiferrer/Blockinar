import React from "react";
import { Pie } from "react-chartjs-2"

const Chart = ({ data }) => {

    const countriesNames = [];
    const getCountriesNames = (countryName) => {
        countriesNames.push(countryName)
        return (countriesNames)
    }

    const countriesInfections = [];
    const getCountriesInfections = (countryInfections) => {
        countriesInfections.push(countryInfections)
        return (countriesInfections)
    }

    data.map((country) => getCountriesNames(country.name))
    data.map((country) => getCountriesInfections(country.infected))

    return (
        <div style={{ width: '80%' }}>
            <h4 style={{ textAlign: 'center' }}>Chart</h4>
            <div style={{ height: '100vh', width: '100%', margin: 'auto' }}>
                <Pie
                    data={{
                        labels: countriesNames,
                        datasets: [
                            {
                                label: 'Contagios por pais',
                                data: countriesInfections,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(0, 255, 255, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(0, 0, 255, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(138, 43, 226, 0.2)',
                                    'rgba(255, 127, 80, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(100, 149, 237, 0.2)',
                                    'rgba(220, 20, 60, 0.2)',
                                    'rgba(255, 248, 220, 0.2)',
                                    'rgba(184, 134, 11, 0.2)',
                                    'rgba(0, 100, 0, 0.2)',
                                    'rgba(139, 0, 139, 0.2)',
                                    'rgba(255, 140, 0, 0.2)',
                                    'rgba(139, 0, 0, 0.2)',
                                    'rgba(143, 188, 143, 0.2)',
                                    'rgba(255, 215, 0, 0.2)',
                                    'rgba(173, 255, 47, 0.2)',
                                    'rgba(255, 105, 180, 0.2)',
                                    'rgba(75, 0, 130, 0.2)',
                                    'rgba(32, 178, 170, 0.2)',
                                    'rgba(255, 0, 255, 0.2)',
                                    'rgba(102, 205, 170, 0.2)',
                                    'rgba(255, 228, 181, 0.2)',
                                    'rgba(255, 165, 0, 0.2)',
                                    'rgba(218, 112, 214, 0.2)',
                                    'rgba(205, 133, 63, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(0, 255, 255, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(0, 0, 255, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(138, 43, 226, 1)',
                                    'rgba(255, 127, 80, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(100, 149, 237, 1)',
                                    'rgba(220, 20, 60, 1)',
                                    'rgba(255, 248, 220, 1)',
                                    'rgba(184, 134, 11, 1)',
                                    'rgba(0, 100, 0, 1)',
                                    'rgba(139, 0, 139, 1)',
                                    'rgba(255, 140, 0, 1)',
                                    'rgba(139, 0, 0, 1)',
                                    'rgba(143, 188, 143, 1)',
                                    'rgba(255, 215, 0, 1)',
                                    'rgba(173, 255, 47, 1)',
                                    'rgba(255, 105, 180, 1)',
                                    'rgba(75, 0, 130, 1)',
                                    'rgba(32, 178, 170, 1)',
                                    'rgba(255, 0, 255, 1)',
                                    'rgba(102, 205, 170, 1)',
                                    'rgba(255, 228, 181, 1)',
                                    'rgba(255, 165, 0, 1)',
                                    'rgba(218, 112, 214, 1)',
                                    'rgba(205, 133, 63, 1)'
                                ],
                                borderWidth: 1
                            },
                        ]
                    }}
                    height={50}
                    width={100}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div >
    )
}

export { Chart }