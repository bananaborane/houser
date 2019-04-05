require('dotenv').config();
const express = require('express');
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const app = express();
const session = require('express-session');
const massive = require('massive');
const PORT = 4444;
const hc = require('./controller')

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected, you may now try for requests');
  });

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000*60*60*24*365
    }
}))


app.get('/api/houses', hc.get);
app.post('/api/houses', hc.post);
app.delete('/api/houses/:id', hc.delete)







app.listen(SERVER_PORT, ()=>{console.log(`server listening in on port: ${SERVER_PORT}`)})

