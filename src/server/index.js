const   express = require('express'), 
        bodyParser = require('body-parser'),
        massive = require('massive'),
        ctrl = require('./controller')
require('dotenv').config()
        
const app = express();
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then( db => app.set('db', db))

app.get('/api/inventory', ctrl.getAll)
        
const port = 3004;
app.listen(port, () => {console.log(`listening on port: ${port}`)}) 
