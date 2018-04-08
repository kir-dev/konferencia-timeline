module.exports = function (req, res, next) {
  if(req.body.adminpass) {
    res.cookie('x-timeline-adminpass', req.body.adminpass);
    req.cookies['x-timeline-adminpass'] = req.body.adminpass;
  }
  dal.Admin.findOne({},function (err, doc) {
    if(doc.password != req.cookies['x-timeline-adminpass']) {
      res.redirect('/admin');
    } else {
      next();
    }
  });
}