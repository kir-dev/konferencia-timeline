var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/konferencia-timeline');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Question = new mongoose.Schema({
    _id: {
        type: ObjectId,
        default: function f() {
            return new mongoose.Types.ObjectId();
        }
    },
    name: String,
    place: String,
    presenter: String,
    startDate: Date,
    endDate: Date,
    offset: Number,
});

mongoose.model('Question', Question);

var Admin = new mongoose.Schema({
    _id: {
        type: ObjectId,
        default: function f() {
            return new mongoose.Types.ObjectId();
        }
    },
    password: String
});

mongoose.model('Admin', Admin);

module.exports = mongoose.models;