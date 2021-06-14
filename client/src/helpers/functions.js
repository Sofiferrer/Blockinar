const getCurrentDate = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}-${month}-${day}`;
};

const stringifyDate = (miliseconds) => {
    const completeDate = new Date(miliseconds * 1000);
    const year = completeDate.getFullYear();
    const month = completeDate.getMonth() + 1;
    const day = completeDate.getDate();
    const date = `${day}-${month}-${year}`;
    return (date)
};

const getDates = (miliseconds) => {
    const dates = [];
    const completeDate = new Date(miliseconds * 1000);
    const year = completeDate.getFullYear();
    const month = completeDate.getMonth() + 1;
    const day = completeDate.getDate();
    const date = `${day}-${month}-${year}`;
    if (!dates.includes(date)) {
        dates.push(date)
    }
    return (dates)
};

const loadTable = (list) => {
    return (list && list.map((infected) => (
        <tr key={infected.id} style={{ backgroundColor: `${infected.live ? "white" : "rgba(255, 99, 132, 0.4)"}` }}>
            <td>{stringifyDate(`${infected.infect_date}`)}</td>
            <td>{infected.first_name}</td>
            <td>{infected.last_name}</td>
            <td>{infected.age}</td>
            <td>{infected.country}</td>
            <td>{infected.female ? "Femenino" : "Masculino"}</td>
        </tr>
    )))
};


export { getCurrentDate, getDates, stringifyDate, loadTable }