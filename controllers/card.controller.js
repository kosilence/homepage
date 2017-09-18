var Card = require('../service').Card;
var qnClient = require('../common/upload_qn.js');
var config = require('../config');

exports.index = function(req, res, next) {
    Card.getAllCards()
        .then(function(cards) {
            if(cards.length === 0) {
                res.send('暂无 Cards');
                return;
            }
            res.send(cards);
        })
        .catch(function(err) {
            res.send('Get All Cards Error: ' + err);
        });
}

exports.store = function(req, res, next) {
    var input = {
        title: req.body.title,
        account: req.body.account,
        homepage: req.body.homepage,
        thumbnail: req.body.thumbnail,
        photo: req.body.photo
    }
    Card.storeCard(input)
        .then(function(card) {
            if(!card) {
                res.send('Card 创建失败');
                return;
            }
            res.send(card);
        })
        .catch(function(err) {
            res.send('Store Card Error: ' + err);
        });
}

exports.upload = function(req, res, next) {
    var filePath = req.file.path;
    var fileName = req.file.filename;
    // 文件上传
    qnClient.uploadFile(filePath, { key: fileName }, function (err, result) {
        console.log(result);
        res.send(result);
    });
}

exports.token = function(req, res, next) {
    var token = qnClient.uploadToken();
    res.send({
        uptoken: token,
        origin: config.qn_config.origin,
        bucket: config.qn_config.bucket
    });
}