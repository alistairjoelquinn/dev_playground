const express = require('express');
const app = express();

app.use(require('../webpack.config.js'));

app.listen(8081, () => console.log(`Bundle Server Running`));
