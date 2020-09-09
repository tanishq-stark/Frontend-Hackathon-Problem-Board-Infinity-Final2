import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm'
import * as serviceWorker from './serviceWorker';



var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
}); 

ReactDOM.render(
    <div>
    <NameForm />


    </div>    
    ,
    
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
