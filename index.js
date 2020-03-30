const express = require('express');
const axios = require('axios');

const app = express();

app.get('/app1', (req, res) => res.json({
	message: 'app1'
}));

app.get(
  '/app1-whoami',
  (req, res) => {

    axios.request({
      url : 'http://whoami/whoami',
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

// whoami

app.listen(3000);
