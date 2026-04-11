require('dotenv').config();

const exp = require('express');
const cs = require('cors');
const db = require('./config/db');

const userRoutes = require('./routes/user.route.js');

const app = exp();
app.use(cs());
app.use(exp.json());

app.use('/auth', userRoutes);

db.sync();
const pt = process.env.PORT;

app.listen(pt, () => {
    console.log(`Server is running here http://localhost:${pt}`)
})