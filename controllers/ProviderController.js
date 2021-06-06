var Provider = require('../models/Provider');
exports.view = function(req, res) {
    Provider.find({}, (err, providers) => {
        if(err) {
            console.log(err);
        } else {
            res.render('provider/viewProvider', {title : 'mprint - view provider', subtitle : 'All Providers', description : 'Total: xx Last updated by: xxx', providers : providers})
        }
    })
    
}

exports.add = function(req, res) {
    res.render('provider/addProvider', {title : 'mprint - add provider', subtitle : 'Add new provider', description : 'Please feel free to drink coffee and add your new provider.'});
}

exports.save = function(req, res) {
    var current_date = new Date().getFullYear()+'-'+new Date().getMonth() + '-' + new Date().getDate()+' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    Provider.create({
        name : req.body.provider,
        contactperson : req.body.contactperson,
        tel_1 : req.body.tel_1,
        tel_2 : req.body.tel_2,
        fax : req.body.fax,
        email : req.body.email,
        address : req.body.address,
        other : req.body.other,
        provider_type : req.body.provider_type,
        is_active : req.body.is_active,
        created_at : current_date,
        updated_at : current_date
    }, function(err, providers) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/provider/view');
        }
    })
}

exports.edit = function(req, res) {
    Provider.findById(req.query.id, (err, provider) => {
        if(err) {
            console.log(err)
            res.status(500).send(err);
        } else {
            res.render('provider/addProvider', {title : 'mprint - edit provider', subtitle : 'Edit provider', description : 'Please feel free to drink coffee and edit your provider.', provider : provider});
        }
    });
}

exports.update = function(req, res, next) {
    var current_date = new Date().getFullYear()+'-'+new Date().getMonth() + '-' + new Date().getDate()+' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    Provider.findByIdAndUpdate(req.body.provider_id, {$set : {
        name : req.body.provider,
        contactperson : req.body.contactperson,
        tel_1 : req.body.tel_1,
        tel_2 : req.body.tel_2,
        fax : req.body.fax,
        email : req.body.email,
        address : req.body.address,
        other : req.body.other,
        provider_type : req.body.provider_type,
        is_active : req.body.is_active,
        updated_at : current_date
    }}, (err, supplier) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.redirect('/provider/view');
        }
    })
}

exports.delete = function(req, res) {
    Provider.findByIdAndDelete(req.body.provider_id, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json({msg : 'success'});
        }
    })
}