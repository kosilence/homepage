var qn = require('qn');
var config = require('../config');

// Create Qiniu Client
var qnClient = null;
qnClient = qn.create(config.qn_config);

module.exports = qnClient;