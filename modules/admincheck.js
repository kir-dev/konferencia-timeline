module.exports = function (req, res, next) {
    console.log(req);
  if(req.body.password) {
    res.cookie('x-timeline-adminpass', req.body.password);
    req.cookies['x-timeline-adminpass'] = req.body.password;
  }
  dal.Admin.findOne({},function (err, doc) {
    if(doc.password != req.cookies['x-timeline-adminpass']) {
      res.redirect('/admin');
    } else {
      next();
    }
  });
}