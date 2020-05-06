const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile('index')) 

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/add.html'))
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))