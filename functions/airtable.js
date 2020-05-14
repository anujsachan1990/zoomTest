"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// sample API URL
// http://anuj-zoom.netlify.com/.netlify/functions/hello
exports.handler = (event, context, callback) => {
  _axios.default.get("https://api.airtable.com/v0/appzhdjp7tk4G73Bh/Table%201", {
    headers: {
      Authorization: "Bearer keypXdhotixFUmd7K"
    }
  }).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data),
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300"
      }
    });
  }).catch(err => {
    callback(err);
  });
};