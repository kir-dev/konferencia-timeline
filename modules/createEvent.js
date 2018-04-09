module.exports = function(req, res, next){
    dal.Event.create({
            name: req.body.name,
            startDate:req.body.startDate,
            endDate: req.body.endDate,
            presenter: req.body.presenter,
            place: req.body.place,
            description: req.body.description
    }, function(doc, err){
        if(err)
            return next(err);
        return next();
    });
    return next();
};