const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/tienda-productos'));
app.get('/',(req,res) =>
    res.sendFile('index.html', {root: 'dist/tienda-productos/'}),
);

app.listen(process.env.PORT || 8080);