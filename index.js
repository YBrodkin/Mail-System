const
express = require('express'),
app = express();

require('dotenv').config()

require('./DL/db').connect()

app.use(require('cors')())
app.use(express.json())


app.use('/email', require('./routes/email.router'))
app.use('/user', require('./routes/user.router'))


app.listen(3213, ()=>console.log("server is running on port 3213"))

