var models  = require('../models');
var Card = models.Card;

/**
 * 获取包含所有 Card 的列表
 */
exports.getAllCards = function () {
    return new Promise(function(resolve, reject) {
        Card.find()
            .then(function(cards) {
                resolve(cards);
            })
            .catch(function(err) {
                reject(err);
            });
    });
};

/**
 * 新增一个 Card
 */
exports.storeCard = function(input) {
    return new Promise(function(resolve, reject) {
        var card  = new Card();
        card.title = input.title;
        card.account = input.account;
        card.homepage = input.homepage;
        card.thubnail = input.thubnail;
        card.photo = input.photo;

        card.save()
            .then(function(card) {
                resolve(card);
            })
            .catch(function(err) {
                reject(err);
            });
    });
};

/**
 * 更新现有 Card 信息
 */
exports.updateCard = function () {

};

/**
 * 删除 Card
 */
exports.deleteCard = function () {

};

/**
 * 上传 Card Photo
 */
exports.uploadCardPhoto = function() {
    return new Promise(function(resolve, reject) {
        Card.find()
            .then(function(cards) {
                resolve(cards);
            })
            .catch(function(err) {
                reject(err);
            });
    });
}