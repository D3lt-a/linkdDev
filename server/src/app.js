require('dotenv').config();

const exp = require('express');
const cs = require('cors');
const sess = require('express-session');

const pass = require('./utils/Passport.js');
const db = require('./config/db');
const userRoutes = require('./routes/user.route.js');
const gitRoutes = require('./routes/git.route.js');

const app = exp();

app.use(cs({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(sess({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.use(exp.static('src/public'));
app.use(exp.json());
app.use(pass.initialize());
app.use(pass.session());

app.use('/auth', userRoutes);
app.use('/git', gitRoutes);

db.sync();
const pt = process.env.PORT;

app.listen(pt, () => {
    console.log(`Server is running here http://localhost:${pt}`)
})