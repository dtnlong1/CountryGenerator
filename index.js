import fetch from "node-fetch"
import 'dotenv/config'
import express from "express"
const app = express()
const port = process.env.PORT || 8000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('/countryinfo', async (req, res) => {
    const fetchAPI = await fetch('https://restcountries.com/v3.1/all')
    const countryNameResponse = await fetchAPI.json()
    res.json(countryNameResponse)
})

