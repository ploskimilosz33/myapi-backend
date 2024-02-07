const express = require('express')
const app = express()
const restaurants = require('./restaurants.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Chuj")
})

app.get('/restaurants', (req, res) => {
    res.send(restaurants)
}
)

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})

