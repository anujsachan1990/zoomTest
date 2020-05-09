import axios from "axios";
exports.handler = (event, context, callback) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
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