var Supplier = require('../models/Supplier');
exports.view = function(req, res) {
    Supplier.find({}, (err, suppliers) => {
        if(err) {
            console.log(err);
        } else {
            res.render('supplier/viewSupplier', {title : 'mprint - view supplier', subtitle : 'All Suppliers', description : 'Total: xx Last updated by: xxx', suppliers : suppliers})
        }
    })
    
}

exports.add = function(req, res) {
    res.render('supplier/addSupplier', {title : 'mprint - add supplier', subtitle : 'Add new supplier', description : 'Please feel free to drink coffee and add your new supplier.'});
}

exports.save = function(req, res) {
    var current_date = new Date().getFullYear()+'-'+new Date().getMonth() + '-' + new Date().getDate()+' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    Supplier.create({
        name : req.body.supplier,
        contactperson : req.body.contactperson,
        tel_1 : req.body.tel_1,
        tel_2 : req.body.tel_2,
        fax : req.body.fax,
        email : req.body.email,
        address : req.body.address,
        other : req.body.other,
        supplier_type : req.body.supplier_type,
        is_active : req.body.is_active,
        created_at : current_date,
        updated_at : current_date
    }, function(err, customer) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/supplier/view');
        }
    })
}

exports.edit = function(req, res) {
    Supplier.findById(req.query.id, (err, supplier) => {
        if(err) {
            console.log(err)
            res.status(500).send(err);
        } else {
            res.render('supplier/addSupplier', {title : 'mprint - edit supplier', subtitle : 'Edit supplier', description : 'Please feel free to drink coffee and edit your supplier.', supplier : supplier});
        }
    });
}

exports.update = function(req, res, next) {
    var current_date = new Date().getFullYear()+'-'+new Date().getMonth() + '-' + new Date().getDate()+' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    Supplier.findByIdAndUpdate(req.body.supplier_id, {$set : {
        name : req.body.supplier,
        contactperson : req.body.contactperson,
        tel_1 : req.body.tel_1,
        tel_2 : req.body.tel_2,
        fax : req.body.fax,
        email : req.body.email,
        address : req.body.address,
        other : req.body.other,
        supplier_type : req.body.supplier_type,
        is_active : req.body.is_active,
        updated_at : current_date
    }}, (err, supplier) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.redirect('/supplier/view');
        }
    })
}

exports.delete = function(req, res) {
    Supplier.findByIdAndDelete(req.body.supplier_id, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json({msg : 'success'});
        }
    })
}