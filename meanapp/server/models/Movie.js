var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
 
//Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

//Export the model Schema.
module.exports = mongoose.model('movie', MovieSchema);