const express = require('express');
const path = require('path');
const app = express();
const launches = require('./resources/launches.json');
const launchpads = require('./resources/launchpads.json');

app.use(express.json({ extended: false }));

app.get('/launches', (req, res) => {
	res.json(launches);
});
app.get('/launchpads', (req, res) => {
	res.json(launchpads);
});

// Serve static assets if it in Prodcution
if (process.env.NODE_ENV === 'production') {
	//Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
