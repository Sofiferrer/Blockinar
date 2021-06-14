import React from "react";
import { Line } from "react-chartjs-2"
import { stringifyDate } from "../../../../../helpers/functions";

const Chart = ({ data }) => {

    //Obtengo array de fechas registradas
    const dates = [];
    const getDates = (infectDate) => {
        const date = infectDate;
        if (!dates.includes(date)) {
            dates.push(date)
        }
        return (dates)
    }

    data && data.map((infected) => getDates(infected.infect_date))

    //saco cantidad de casos por cada fecha registrada
    const porFecha = () => {
        const infectedPerDate = (date) => data.filter((d) => (d.infect_date) === date).length
        return dates.map((date) => infectedPerDate(date))
    }


    return (
        <div style={{ marginTop: '10vh' }}>
            <div style={{ height: '50vh', width: '80%', margin: 'auto' }}>
                <Line
                    data={{
                        labels: dates.map((date) => stringifyDate(date)),
                        datasets: [
                            {
                                label: 'Progresion contagios',
                                data: porFecha(),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
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