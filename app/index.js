const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const sequelize = require('./util/database')


sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Api running on port ${port}!`);
    });
}).catch(err => {
    console.log(err);
})