require('dotenv').config();

module.exports = {
    user: process.env.ORACLE_ID,
	password: process.env.ORACLE_PW,
	connectString: process.env.ORACLE_TNS,
}