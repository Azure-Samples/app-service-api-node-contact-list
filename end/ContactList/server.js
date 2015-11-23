 'use strict';

 var http = require('http');
 var express = require('express');
 var bodyParser = require('body-parser');
 var swaggerize = require('swaggerize-express');
 var swaggerUi = require('swaggerize-ui'); // change one
 var path = require('path');

 var app = express();

 var server = http.createServer(app);

 app.use(bodyParser.json());

 app.use(swaggerize({
     api: path.resolve('./config/api.json'), // change two
     handlers: path.resolve('./handlers'),
     docspath: '/swagger' // change three
 }));

 // change four
 app.use('/docs', swaggerUi({
   docs: '/swagger'  
 }));

 server.listen(8000, function () {
     app.setHost(undefined); // change five
 });