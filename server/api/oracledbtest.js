const router = require('express').Router();
const { modelCall } = require('../../util/lib');
const oracledbtestModel = require('./_model/oracledbtestModel');


router.get('/getGrplist', async (req, res) => {
    const result = await modelCall(oracledbtestModel.getGrplist, req);    
    res.json(result);
});

module.exports = router;