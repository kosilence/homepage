/**
 * 在 Model 层之上额外封装 Service 层
 * 对 Model 层的 mongoose 实例方法封装
 * 同时提供给 Controller 开箱易用的方法
 */
exports.Card = require('./card.service');