"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = require("../reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)());

var store = (0, _redux.createStore)(_reducers2.default, middleware);

exports.default = store;

//# sourceMappingURL=index-compiled.js.map