const express = require('express');
const router = express.Router();
const data = require('../../resources/launches.json');

router.get('/', (req, res) => {
	res.json(data);
});
