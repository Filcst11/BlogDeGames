const express = require('express')
const session = require('express-session')
const app = express()
const mustache = require('mustache-express')
const db = require('./src/db')

app.engine('html', mustache())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')
app.use(express.static('public'))

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',
    resave: false,
    saveUnitialized: false
}))

app.use(express.urlencoded({extended: true}));
app.use('/', require('./src/routes/appRoutes'));

db.sync(() => console.log(`Banco de dados conectado`));

const PORT = 8081
app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT)
})