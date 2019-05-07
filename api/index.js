var express = require('express');
//builds router object
const router = express.Router();


router.get('/', (req, res) => {
    res.send({data: [] });
});

export default router;