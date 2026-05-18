const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get('/', (req, res) => {
    let todoItems = todos.map((todo, index) => `
        <li>
            ${todo}
            <a href="/delete/${index}">❌</a>
        </li>
    `).join('');

    res.send(`
        <html>
        <head>
            <title>To Do App</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 50px;
                    background: #f5f5f5;
                }
                input {
                    padding: 10px;
                    width: 250px;
                }
                button {
                    padding: 10px 20px;
                    background: blue;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    background: white;
                    margin: 10px auto;
                    width: 300px;
                    padding: 10px;
                    border-radius: 8px;
                    display: flex;
                    justify-content: space-between;
                }
                a {
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <h1>Ritik's DevOps To-Do App 🚀</h1>

            <form action="/add" method="POST">
                <input type="text" name="task" placeholder="Enter task" required />
                <button type="submit">Add</button>
            </form>

            <ul>
                ${todoItems}
            </ul>
        </body>
        </html>
    `);
});

app.post('/add', (req, res) => {
    todos.push(req.body.task);
    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    todos.splice(req.params.id, 1);
    res.redirect('/');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});