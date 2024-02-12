const CatchAsyncError = (callback) => (req, res, err) => {
  Promise.resolve(callback(req, res, err)).catch(err);
};
module.exports = CatchAsyncError;
