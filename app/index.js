const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001
const sequelize = require('./util/database')
const todoRoute = require('./routes/todo')
const Router = express.Router
const router = new Router()

app.use(cors())
app.use(express.json())

app.use('/todo', todoRoute(router))

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Api running on port ${port}!`);
    });
}).catch(err => {
    console.log(err);
})