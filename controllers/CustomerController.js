const express = require('express');
const router = express.Router();
var _ = require("underscore");
let PizzaData = require('../models/PizzaData');
let Cart = require('../models/Cart');

let CustomerInfo = require('../models/CustomerInfo');
let OrderData = require('../models/ConfirmedOrder');
const OrderModel = require("../models/ConfirmedOrder"); // Assuming the model file is in a separate file


module.exports = function () {

    router.post('/add-customer', function (req, res) {
        console.log(req.body)
        let PizzaDataJSON = new CustomerInfo(req.body);
        PizzaDataJSON.save()
            .then(Course => {
                var data = {
                    Status: "Sucess",
                    Message: "Successfully Added A New Pizza"
                }
                res.status(201).send(data);
            }).catch(err => {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            });

    })

    router.post('/customer-login', function (req, res) {

        return CustomerInfo.findOne({ CustomerEmailAdress: req.body.CustomerEmailAdress, Passwored: req.body.Passwored })
            .then(customer => {
                if (customer) {
                    // Email and password match
                    console.log("Found")
                    var data = {
                        Status: true,
                        CustomerData: customer
                      
                    }
                    res.status(200).send(data);

                } else {
                    console.log("No match")
                    // Email and password do not match
                    var data = {
                        Status: false,
                        
                    }
                    res.status(200).send(data);
                }
            })
            .catch(error => {
                // Error occurred during the verification process
                console.error(error);
                throw error;
            });

    })







    return router;
}