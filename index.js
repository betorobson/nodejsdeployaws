const express = require('express');
const axios = require('axios');
const { resJSONBody } = require('./middlewares/res-jsonbody');
const app = express();

app.get(
  '/app1',
  resJSONBody,
  (req, res) => {

    try {
      if(req.query.name){
        req.query.name();
      }
    } catch(err){
      console.log(err);
      process.exit(1);
    }

    return res.json(
      Object.assign(
        res.resJSONBody || {},
        {
        message: 'app1:v0.0.5'
        }
      )
    );
  }
);

app.get(
  '/app1-whoami',
  (req, res) => {

    axios.request({
      url : 'http://whoami/',
      method: 'GET'
    }).then(response =>

      res.json({
        message: 'app1-whoami',
        data: response.data.split('\r\n')
      })

    )
    .catch(error => {

      res.json({
        message: 'app1-whoami',
        error: error
      });

    });

  }
);

app.get(
  '/app1-get-app3',
  (req, res) => {

    axios.request({
      url : 'http://app3:3000/app3',
      method: 'GET'
    }).then(response =>

      res.json({
        message: 'app3',
        data: response.data
      })

    )
    .catch(error => {

      res.json({
        message: 'app3',
        error: error
      });

    });

  }
);

// whoami

app.listen(3000);

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});
