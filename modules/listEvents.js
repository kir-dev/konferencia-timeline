module.exports = function(req, res, next){
    dal.Event.find({}, function(doc, err){
        if(err)
            next(err);
        req.events = doc;
        return next();
    });
    return next();
}