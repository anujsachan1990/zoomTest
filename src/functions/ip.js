import axios from "axios";

// sample API URL
// http://anuj-zoom.netlify.com/.netlify/functions/hello

exports.handler = (event, context, callback) => {
  axios
    .get("https://api.ipify.org")
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};
