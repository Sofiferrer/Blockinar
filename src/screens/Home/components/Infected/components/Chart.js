import React from "react";
import { Line } from "react-chartjs-2"

const Chart = ({ data }) => {

    const dates = [];
    const getDates = (miliseconds) => {
        const completeDate = new Date(miliseconds * 1000);
        const year = completeDate.getFullYear();
        const month = completeDate.getMonth() + 1;
        const day = completeDate.getDate();
        const date = `${day} / ${month} / ${year}`;
        if (!dates.includes(date)) {
            dates.push(date)
        }
        return (dates)
    }

    const stringifyDate = (miliseconds) => {
        const completeDate = new Date(miliseconds * 1000);
        const year = completeDate.getFullYear();
        const month = completeDate.getMonth() + 1;
        const day = completeDate.getDate();
        const date = `${day} / ${month} / ${year}`;
        return (date)
    }

    data && data.map((infected) => getDates(infected.infect_date))

    const porFecha = () => {
        const infectedPerDate = (date) => data.filter((d) => stringifyDate(d.infect_date) === date).length
        return dates.map((date) => infectedPerDate(date))
    }


    return (
        <div style={{ marginTop: '10vh' }}>
            <div style={{ height: '50vh', width: '80%', margin: 'auto' }}>
                <Line
                    data={{
                        labels: dates,
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