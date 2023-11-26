const express = require('express')
const app = express()
const port = 3000
const sql = require('mysql2')
app.use(express.json())

const conn = sql.createConnection({
  host: 'localhost',
  password: '',
  user: 'root',
  database: 'epitaka-db'
})

app.post('/sign-up', (req, res) => {
  
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})