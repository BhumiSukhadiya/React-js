'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _authorPage = require('../components/authorPage');

var _authorPage2 = _interopRequireDefault(_authorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_store2.default.dispatch(function (dispatch) {
    _axios2.default.get('http://localhost:3001/getData').then(function (response) {
        console.log(response.data);
        dispatch({ type: "GET_DATA", payload: response.data });
    });
});
function mapStateToProps(state) {
    return {
        authors: state.authors
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_authorPage2.default);

//# sourceMappingURL=authorPageContainer-compiled.js.map