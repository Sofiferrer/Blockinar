const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myapi',
    multipleStatements: true
});

app.post('/api/infected', (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const country = req.body.country;
    const live = req.body.live;
    const age = req.body.age;
    const infect_date = req.body.infect_date;
    const gendre = req.body.gendre;

    db.query('INSERT INTO infected (first_name, last_name, country, live, age, infect_date, gendre) VALUES (?,?,?,?,?,?,?)', [first_name, last_name, country, live, age, infect_date, gendre], (err, result) => {
        if (!err) {
            res.send('Se agrego correctamente')
        } else {
            console.log(err)
        }
    });
});

app.get('/infected', (req, res) => {
    db.query('SELECT * FROM infected', (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            console.log(err)
        }
    })
})

//countries

app.get('/countries', (req, res) => {
    db.query('SELECT * FROM countries', (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            console.log(err)
        }
    })
})

app.listen(3050, () => {
    console.log('Corriendo puerto 3050');
});