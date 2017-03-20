'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _userList = require('./userList');

var _userList2 = _interopRequireDefault(_userList);

var _authorData = require('./authorData');

var _authorData2 = _interopRequireDefault(_authorData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducers = (0, _redux.combineReducers)({
    users: _userList2.default,
    authors: _authorData2.default
});
//console.log(allReducers)
exports.default = allReducers;

//# sourceMappingURL=index-compiled.js.map