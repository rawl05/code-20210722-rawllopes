'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const http = require('http');

const routes = require('./routes');
const config = require('./config');

const app = express();


// support json encoded bodies
app.use(bodyParser.json({limit: '52428800'})); 

// support encoded bodies
app.use(bodyParser.urlencoded({ limit: '52428800', extended: true }));

app.use(cors({origin: '*', allowedHeaders: config.allowedHeaders, exposedHeaders: config.exposedHeaders}));

app.use('/api', routes);

app.listen(config.port, () => { console.log(`Server Initiated on ${config.port}`);});
