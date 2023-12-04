const express = require('express')
const app = express()
const port = 3000
const sql = require('mysql2')
const bcrypt = require('bcrypt')
app.use(express.json())
app.use(require('cors')())

const saltRounds = 10

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
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  if (userExists) {
    return ({ error: "User already Exists" })
  }
  conn.query(
    "INSERT INTO `account` (`Username`, `Password`, `FName`, `LName`) VALUES (?, ?, ?, ?)",
    [username, hashedPassword, firstName, lastName],
    (err, data) => {
      if (err) {
        console.error("Error inserting into 'user' table:", err)
        return;
      }
      console.log("Inserted Successfully")
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
      const usernameExists = data.length > 0;
      const userInfo = usernameExists
        ? { username: data[0].Username, password: data[0].Password }
        : null;
      
      console.log(userInfo)
      res.json({ usernameExists, userInfo })
    }
  )
})

app.post('/check-username/:username', async (req, res) => {
  const username = req.params.username;
  const passwordInput = req.body.password;

  conn.query(
    "SELECT * FROM `account` WHERE `Username` = ?", [username], async (err, data) => {
      if (err) {
        console.error("Failed to Check for Username:", err);
        return res.status(500).json({ error: "Failed to check for username." });
      }

      if (data.length > 0) {
        const storedHashedPassword = data[0].Password;
        const passwordMatch = await bcrypt.compare(passwordInput, storedHashedPassword);
        const usernameExists = true;
        const userInfo = usernameExists
          ? { username: data[0].Username, password: data[0].Password }
          : null;

        if (passwordMatch) {
          console.log("Password is correct");
          res.json({ usernameExists, userInfo });
        } else {
          console.log("Incorrect password");
          res.json({ usernameExists: false, userInfo: null });
        }
      } else {
        console.log("User not found");
        res.json({ usernameExists: false, userInfo: null });
      }
    }
  );
});

app.get('/user-balance/:username', (req, res) => {
  const username = req.params.username;
  conn.query(
    "SELECT `Balance` FROM `account` WHERE `Username` = ?", [username], (err, data) => {
      if (err) {
        console.error("Failed to retrieve User Balance:", err);
        return res.status(500).json({ error: "Failed to retrieve User Balance." });
      }
      const userBalance = data.length > 0 ? data[0].Balance : null;
      res.json({ userBalance })
    }
  )
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})