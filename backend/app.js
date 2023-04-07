const express = require('express')
const cors = require('cors')
require('dotenv').config()
const generateMatrix = require('./generateMatrix.js')
const calculateRank = require('./calculateRank.js')
const checkRank = require('./checkRank.js')
const arrayOfCountries = ['India', 'Nepal', 'Finland', 'Germany']

const port = process.env.PORT || 5000
const app = express()
app.use(cors())

app.get('/api/get-countries-tags', (req, res) => {
    try {
    // generateMatrix - Function use to Generate a Random 2d Array
    // calculateRank - Function use to Calculate count consecutive occurence of a country
     // checkRank - Function use to check rank 
    let matrix = generateMatrix(arrayOfCountries)
    let ranks = calculateRank(matrix)
    let rank = checkRank(ranks)
    res.status(200).send({status: 'Success', matrix, rank}) 
    } catch(e) {
    res.status(400).send({status: 'Failed'})
    }
})


app.listen(port, () => {
    console.log(
        `Node Server is running on PORT ${port}`
    )
})
