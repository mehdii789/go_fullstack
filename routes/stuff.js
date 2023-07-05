const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, stuffCtrl.createsauce);
router.get('/:id', auth, stuffCtrl.getOnesauce);
router.put('/:id', auth, stuffCtrl.modifysauce);
router.delete('/:id', auth, stuffCtrl.deletesauce);

module.exports = router;

