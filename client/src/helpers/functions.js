//Obtengo fecha del dia que corre
const getCurrentDate = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}-${month}-${day}`;
};

//Devuelvo la fecha como un string
const stringifyDate = (infectDate) => {
    const completeDate = infectDate;
    const date = completeDate.split('T', 1);
    return (date)
};

//Funcion que carga datos en la tabla
const loadTable = (list) => {
    return (list && list.map((infected) => (
        <tr key={infected.id} style={{ backgroundColor: `${infected.live ? "white" : "rgba(255, 99, 132, 0.4)"}` }}>
            <td>{stringifyDate(infected.infect_date)}</td>
            <td>{infected.first_name}</td>
            <td>{infected.last_name}</td>
            <td>{infected.age}</td>
            <td>{infected.country}</td>
            <td>{infected.gendre}</td>
        </tr>
    )))
};


export { getCurrentDate, stringifyDate, loadTable }