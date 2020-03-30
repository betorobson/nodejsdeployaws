const express = require('express');

const app = express();

app.get('/app3', (req, res) => res.json({
	message: 'app3'
}));

app.listen(3000);
