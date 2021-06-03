var Customer = require('../models/Customer');

exports.view = function(req, res, next) {

    console.log(req.session)
    Customer.find({}, (err, customers) => {
        if(err) {
            console.log(err);
        } else {
            res.render('customer/viewCustomer', {title : 'mprint | View Customer', subtitle : 'Customers', description : 'Total: 700 On-job: 300', customers : customers});;
        }
    })
    
}
exports.add = function(req, res, next) {
    console.log(req.session)
    res.render('customer/addCustomer', {title : 'mprint | Add Customer', subtitle : 'Add new customer', description : 'user: sale001'})
}

exports.save = function(req, res, next) {
    Customer.create({
        name : req.body.name,
        contactperson : req.body.contactperson,
        tel_1 : req.body.tel_1,
        tel_2 : req.body.tel_2,
        fax : req.body.fax,
        email : req.body.email,
        address : req.body.address,
        other : req.body.other,
        loyalty : req.body.loyalty,
        is_active : req.body.is_active
    }, function(err, customer) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/customer/view');
        }
    })
}

exports.edit = function(req, res, next) {
    Customer.findById(req.query.id, (err, customer) => {
        if(err) {
            console.log(err)
            res.status(500).send(err);
        } else {
            res.render('customer/addCustomer', {title : 'mprint | Add Customer', subtitle : 'Add new customer', description : 'user: sale001', customer : customer})
        }
    })
}

exports.update = function(req, res, next) {
    Customer.updateOne({_id:req.body.id}, {$set : {
        name : req.body.name,
        contactperson : req.body.contactperson,
        tel_1 : req.body.tel_1,
        tel_2 : req.body.tel_2,
        fax : req.body.fax,
        email : req.body.email,
        address : req.body.address,
        other : req.body.other,
        loyalty : req.body.loyalty,
        is_active : req.body.is_active
    }}, (err, customer) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.redirect('/customer/view');
        }
    })
}