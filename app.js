const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')

//data
const profession = require('./config/professionForm.json').profession

//PORT
const PORT = 8080

//set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

//set public
app.use(express.static('public'))

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//route
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const trashTalk = req.body
    console.log(trashTalk)
    res.render('index', { profession })
})

//listen
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})