const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "test"})
})

app.use('/blog', require('./controllers/blog'))
app.listen(PORT, () => {
    console.log('Connected')
})