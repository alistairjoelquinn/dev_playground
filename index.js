const express = require('express');
const app = express();
const compression = require('compression');

app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/output.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/output.js', (req, res) => res.sendFile(`${__dirname}/output.js`));
}

app.get('*', (req, res) => res.sendFile(__dirname + '/init/index.html'));

app.listen(8080, () => console.log("I'm listening."));