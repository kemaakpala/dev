var configValues = require('./config');

//could place decrypter here to decrypt username and password.

//returns database connection string
module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds145395.mlab.com:45395/nodetodosample';
    }
};