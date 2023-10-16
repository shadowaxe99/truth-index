exports.authorize = (req, res, next) => {
  const userRole = req.user.role;
  if (userRole !== 'admin') return res.status(403).send('Access Denied');
  next();
};