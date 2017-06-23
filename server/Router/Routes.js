const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
	res.json({ message: 'hitting api endpoint' });
});

module.exports = router
