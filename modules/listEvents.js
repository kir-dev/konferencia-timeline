module.exports = function(req, res, next){
    dal.Event.find({}, function(err, doc){
        if(err) {
            next(err);
        }
        res.events = doc;
        next();
    });
};
