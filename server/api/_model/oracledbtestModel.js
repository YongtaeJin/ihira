const fs = require('fs');
const path = require('path');
const oradb = require('../../plugins/oracledb');

const oracledbtestModel = {
    async getGrplist (req) {
        
        var sql = "SELECT c_gcode, n_gcode FROM SY_GRPCODE";
        const rows = await oradb.queryObject(sql, [], []);
        console.log(rows)
        return rows;
    },
}

module.exports = oracledbtestModel;