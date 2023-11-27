const express = require('express')
const app = express()
const port = 3000
const sql = require('mysql2')
app.use(express.json())
app.use(require('cors')())

const conn = sql.createConnection({
  host: 'localhost',
  password: '',
  user: 'root',
  database: 'epitaka-db'
})

const checkUsername = (username) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM `account` WHERE `Username` = ?", [username], (err, data) => {
      if (err) {
        console.error("Error Checking Username:", err);
        reject(err);
        return
      }
      resolve(data.length > 0)
    })
  }) 
}

app.post('/sign-up', async (req, res) => {
  // const [firstName, lastName, username, password] = req.body
  const firstName = req.body.fname
  const lastName = req.body.lname
  const username = req.body.username
  const password = req.body.password
  const userExists = await checkUsername(username)
  if (userExists) {
    return ({ error: "User already Exists" })
  }
  conn.query(
    "INSERT INTO `user` (`Fname`, `Lname`) VALUES (?, ?)",
    [firstName, lastName],
    (err, data) => {
      if (err) {
        console.error("Error inserting into 'user' table:", err)
        return;
      }

      conn.query(
        "INSERT INTO `account` (`Username`, `Password`) VALUES (?, ?)",
        [username, password],
        (err, data) => {
          if (err) {
            console.error("Error inserting into 'account' table:", err)
            return;
          }
          console.log("Inserted Successfully")
        }
      )
    }
  )
  console.log(req.body);
  res.json(req.body);
});

app.get('/check-username/:username', (req, res) => {
  const username = req.params.username;
  conn.query(
    "SELECT * FROM `account` WHERE `Username` = ?", [username], (err, data) => {
      if (err) {
        console.error("Failed to Check for Username:", err);
        return;
      }
      const usernameExists = data.length > 0
      res.json({ usernameExists })
    }
  )
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})