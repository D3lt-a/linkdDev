require('dotenv').config();
const exp = require('express');
const cs = require('cors');

const app = exp();
app.use(cs());
app.use(exp.json());

const pt = process.env.PORT;

app.listen(pt, () => {
    console.log(`Server is running here http://localhost:${pt}`)
})