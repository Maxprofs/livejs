const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./server/Router/Routes');
const multipart = require('connect-multiparty');
const multipartMiddleWare = multipart({uploadDir: './server/Uploads' });
const securedRouter = require('./server/Router/SecuredRoutes');
const PORT = process.env.PORT || 8080;
const config = require('./server/config/config');
const mongoose = require('mongoose');

//app.use(multipartMiddleWare);
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.json());
app.use(cors());
config.configServer();

//Connecting to mongoDB
mongoose.connect(process.env.MONGOOSE_CONNECT);

app.use('/api', routes);

securedRouter.use('/api/secure', (req, res, next) => {
    let token = req.body.token || req.headers['token'];

    if (token) {
        next();
    }
    else {
        res.status(500).send('Invalid token');
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
