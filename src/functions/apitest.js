import axios from "axios";
const { checkHeaderForValidToken } = require("./auth.js");

// sample API URL
// http://anuj-zoom.netlify.com/.netlify/functions/hello

exports.handler = async (event, context, callback) => {
  try {
    await checkHeaderForValidToken({
      authorization: event.headers.authorization,
    });
  } catch (err) {
    console.error(err);
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: err }),
    };
  }

  axios
    .get("https://api.airtable.com/v0/appzhdjp7tk4G73Bh/Table%201", {
      headers: {
        Authorization: "Bearer keypXdhotixFUmd7K",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    })
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    })
    .catch((err) => {
      callback(err);
    });
};
