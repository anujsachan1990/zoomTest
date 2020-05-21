import axios from "axios";

exports.handler = (event, context, callback) => {
  axios
    .get("https://api6.ipify.org?format=json")
    .then((res) => {
      callback(null, {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};
