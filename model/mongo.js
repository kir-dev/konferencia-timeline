var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/konferencia-timeline');
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open ');
}); 
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Event = new mongoose.Schema({
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
    description: String,
});

mongoose.model('Event', Event);

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