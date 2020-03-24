const express = require('express');

const app = express();

app.get('/app1', (req, res) => res.json({
	message: 'app1'
}));

app.listen(3000);
