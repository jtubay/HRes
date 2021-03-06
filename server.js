const express = require('express');
const path = require('path');
const app = express();
const tableData = require('./data/tableData');
const waitListData = require('./data/waitingListData');

const PORT = process.env.PORT || 4000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//html routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html'))) 
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/reserve.html'))) 
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'public/tables.html'))) 

//api routes
app.get('/api/tables', (req, res) => res.json(tableData));
app.get('/api/waitlist', (req, res) => res.json(waitListData))
app.post('/api/tables', (req, res) => {
    if(tableData.length < 5) {
        tableData.push(req.body);
        res.json(true)
    }else{
        waitListData.push(req.body)
        res.json(false)
    }
})
app.post('/api/clear', (req, res) => {
    tableData.length = 0;
    waitListData.length =0

    res.json({ ok: true })
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))