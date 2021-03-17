const express = require('express')
const exphbs = require('express-handlebars')
const hbsHelper = require('./helpers')
const app = express()
const bodyParser = require('body-parser')

//genearte trashTalk
const generateTrashTalk = require('./generateTrashTalk')

//data
const profession = require('./config/professionForm.json').profession

//PORT
const PORT = 8080

//set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs', helpers: hbsHelper }))
app.set('view engine', 'hbs')

//set public
app.use(express.static('public'))

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//route
app.get('/', (req, res) => {
    res.render('index', { profession })
})

app.post('/', (req, res) => {
    const options = req.body
    const trashTalk = generateTrashTalk(options)
    res.render('index', { profession, trashTalk, options })
})

//listen
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})