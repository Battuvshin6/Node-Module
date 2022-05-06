function logOriginalUrl(req, res, next) {
  console.log("Request Url: ", req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Request Type: ", req.method);
  next();
}
module.exports = [logOriginalUrl, logMethod];
