exports.resJSONBody = (req, res, next) => {

  res.jsonBody = res.jsonBody || {};

  Object.assign(
    res.jsonBody,
    {
      msg: 'yes it works v3'
    }
  );

  next();

};
