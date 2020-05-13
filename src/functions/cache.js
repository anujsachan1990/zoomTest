exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: new Date().toString(),
    headers: {
      "Cache-Control": "public, s-maxage=86400",
    },
  });
};
