const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')


//PORT
const PORT = 8080

//set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//route
app.get('/', (req, res) => {
    res.render('index')
})

//listen
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})