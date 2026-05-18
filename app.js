const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Ritik, DevOps Project Running Successfully 🚀</h1>');
    res.send('<h1>CI/CD Auto Deploy Working 🚀</h1>');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});