const express = require('express');
const testControl = require('../controllers/test-controller');
const router = express.Router();

router.get('/', (req, res) => testControl.getData(req, res));
router.post('/', (req, res) => testControl.insertData(req, res));
router.delete('/', (req, res) => testControl.deleteData(req, res));
router.put('/', (req, res) => testControl.updateData(req, res));

module.exports = router;
