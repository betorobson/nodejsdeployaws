exports.resJSONBody = (req, res, next) => {

  res.resJSONBody = res.resJSONBody || {};

  Object.assign(
    res.resJSONBody,
    {
      msg: 'yes it works v2'
    }
  );

  next();

};
