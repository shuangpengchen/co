

import Express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import config from '../../config/config'
import session from 'express-session'

import sessionConfig from '../../config/sessionConfig'

const app = new Express()

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser('Wh8%%94DDy92][123_+12(*&8os\'yof8s8da:[]f8sdh2u9(*)82327lksd9fsd7KKL:792RD唧唧复唧唧3h4jh'))
app.use(session(sessionConfig))


//routers
app.use('/', require('./routes/viewer.js'))
app.use('/mng', require('./routes/manager.js'))


mongoose.Promise = require('bluebird')
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err, "Could not connect to DB");
        return;
    }
    console.log("Successfully connected to DB");
    app.listen(config.apiPort, err => {
        if (err) {
            console.log(err)
        } else {
            console.log(`API server running at http://${config.apiHost}:${config.apiPort}`)
        }
    })
})









