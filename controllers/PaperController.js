var Supplier = require('../models/Supplier');
var PaperType = require('../models/PaperType');
var PaperSize = require('../models/PaperSize');
var Gram = require('../models/Gram');
const Paper = require('../models/Paper');

exports.view = function(req, res){
    Paper.find({}, (err, papers) => {
        if(err) {
            console.log(err);
        } else {
            res.render('paper/viewPaper', {title : 'mprint - view paper', subtitle : 'Paper stock', description : 'Subtitle', papers: papers})
        }
    })
    
}

exports.add = function(req, res) {
    Supplier.find({}, (err, suppliers) => {
        if(err){
            console.log(err);
        } else {
            PaperType.find({}, (err, papertypes) => {
                if(err) {
                    console.log(err);
                } else {
                    PaperSize.find({}, (err, papersizes) => {
                        if(err) {
                            console.log(err);
                        }else {
                            Gram.find({}, (err, grams) => {
                                if(err) {
                                    console.log(err);
                                } else {
                                    res.render('paper/addPaper', {title : 'mprint - add paper', subtitle : 'Add new paper to stock', description : 'New paper need to have prototype.', suppliers : suppliers, papertypes : papertypes, papersizes : papersizes, grams : grams})
                                }
                            })
                            
                        }
                    })
                    
                }
            })
            
        }
    })
    
}

exports.add_paper_type = function(req, res) {
    PaperType.find({}, (err, papertypes) => {
        if(err) {
            console.log(err);
        } else {
            res.render('paper/addPaperPrototype', {title : 'mprint - add paper prototype', subtitle : 'Add new paper prototype', description : 'The prototype of the paer/ display here.', papertypes : papertypes});
        }
    })
    
}

exports.paper_type_save = function(req, res) {
    PaperType.create({
        type_name : req.body.paper_type,
        width : req.body.width,
        height : req.body.height,
        unit : req.body.unit,
        gram : req.body.gram
    }, (err, paper_type) => {
        if(err) {
            console.log(err);
        } else {
            res.json({paper_type : paper_type});
        }
    });
}

exports.paper_type_delete = function(req, res) {
    PaperType.findByIdAndDelete(req.body.type_id, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json({mas : 'success'});
        }
    });
}

exports.paper_size_save = function(req, res) {
    PaperSize.create({
        size : req.body.size
    }, (err, papersize) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send({papersize : papersize});
        }
    })
}

exports.gram_save = function(req, res) {
    Gram.create({
        gram : req.body.gram
    }, (err, gram) => {
        if(err) {
            console.log(err);
        } else{
            res.status(200).send({gram : gram});
        }
    })
}

exports.select_size_gram = function(req, res) {
    PaperType.findById(req.body.type_id, (err, papertype) => {
        if(err) {
            console.log(err);
        } else {
            res.json({papertype: papertype});
        }
    })
}

exports.paper_save = function(req, res) {
    var current_date = new Date().getFullYear()+'-'+new Date().getMonth() + '-' + new Date().getDate()+' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    Paper.create({
        supplier_id : req.body.supplier_id,
        suppliername : req.body.suppliername,
        paper_type : req.body.paper_type,
        type_name : req.body.type_name,
        paper_size : req.body.papersize,
        unit: req.body.unit,
        gram : req.body.gram,
        brand : req.body.brand,
        amount_per_pack : req.body.amount_per_pack,
        price_per_ream : req.body.price_per_ream,
        price_per_kg: req.body.price_per_kg,
        price_per_sheet : req.body.price_per_sheet,
        updated_at : current_date
    }, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json({ msg : 'success'});
        }
    })
}

exports.delete = function(req, res) {
    Paper.findByIdAndDelete(req.body.paper_id, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json({msg : 'success'});
        }
    })
}

exports.edit = function(req, res) {
    Paper.findById(req.query.id, (err, paper) => {
        if(err) {
            console.log(err);
        } else {
            Supplier.find({}, (err, suppliers) => {
                if(err){
                    console.log(err);
                } else {
                    PaperType.find({}, (err, papertypes) => {
                        if(err) {
                            console.log(err);
                        } else {
                            PaperSize.find({}, (err, papersizes) => {
                                if(err) {
                                    console.log(err);
                                }else {
                                    Gram.find({}, (err, grams) => {
                                        if(err) {
                                            console.log(err);
                                        } else {
                                            res.render('paper/addPaper', {title : 'mprint - add paper', subtitle : 'Add new paper to stock', description : 'New paper need to have prototype.', suppliers : suppliers, papertypes : papertypes, papersizes : papersizes, grams : grams, paper: paper})
                                        }
                                    })
                                    
                                }
                            })
                            
                        }
                    })
                    
                }
            })
        }
    })
}

exports.update = function(req, res) {
    var current_date = new Date().getFullYear()+'-'+new Date().getMonth() + '-' + new Date().getDate()+' '+ new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    Paper.findByIdAndUpdate(req.body.paper_id, {$set : {
        supplier_id : req.body.supplier_id,
        suppliername : req.body.suppliername,
        paper_type : req.body.paper_type,
        type_name : req.body.type_name,
        paper_size : req.body.papersize,
        unit: req.body.unit,
        gram : req.body.gram,
        brand : req.body.brand,
        amount_per_pack : req.body.amount_per_pack,
        price_per_ream : req.body.price_per_ream,
        price_per_kg: req.body.price_per_kg,
        price_per_sheet : req.body.price_per_sheet,
        updated_at : current_date
    }}, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json({msg : 'success'});
        }
    })
}