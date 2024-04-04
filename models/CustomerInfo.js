const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Customerinfo = new Schema({
    CustomerID: {
        type: String
    },
    CustomerFirstName: {
        type: String
    },
    CustomerLastName: {
        type: String
    },
    CustomerEmailAdress: {
        type: String
    },
    CustomerMobileNumber: {
        type: String
    },
    Passwored: {
        type: String
    },
    CustomerAdress: {
        type: String
    },
    CustomerCity: {
        type: String
    }


});

module.exports = mongoose.model('customerinfo', Customerinfo);