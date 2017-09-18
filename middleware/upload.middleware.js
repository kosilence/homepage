var multer = require('multer');
var CryptoJS = require('crypto-js');

var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads');
        },
        filename: function (req, file, cb) {
            var dateStr = Date.now().toString();
            var md5Date = CryptoJS.MD5(dateStr, "candy").toString();
            var fileFormat = file.originalname.split('.');
            cb(null, file.fieldname + '.' + md5Date + '.' + fileFormat[fileFormat.length - 1]);
        }
});

var upload = multer({ storage: storage });

module.exports = upload;
