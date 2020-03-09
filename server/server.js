import path from 'path'
import Express from "express"
import httpProxy from 'http-proxy'
import config from "../config/config"



const app = new Express();
const apiUrl = `http://${config.apiHost}:${config.apiPort}`;

const proxy = httpProxy.createProxyServer(
    { target: apiUrl }
);

app.use('/api', (req, res) => {
    proxy.web(req, res, { target: apiUrl })
});

app.use('/', Express.static(path.join(__dirname, '..', 'build')))
app.use('/', Express.static(path.join(__dirname, '..', 'static')))

app.listen(config.port, (err) => {
    if (err)
        console.log(err)
    else {
        console.log(`proxy running at http://${config.host}:${config.port}`);
    }
})