const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./server/Router/Routes');
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.json());

app.use('/api', routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
