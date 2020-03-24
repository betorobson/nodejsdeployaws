const express = require('express');

const app = express();

app.get('/app2', (req, res) => res.json({
	message: 'app2'
}));

app.get('/app2/list', (req, res) => res.json({
	message: 'app2/list'
}));

app.listen(3000);
