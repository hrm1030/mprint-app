$(document).ready(function() {
    $('#btn_save').click(function() {
        var brand = $('#brand').val();
        var amount_per_pack = $('#amount_per_pack').val();
        var price_per_ream = $('#price_per_ream').val();
        var price_per_kg = $('#price_per_kg').val();
        var price_per_sheet = $('#price_per_sheet').val();
        var supplier_id = $('#supplier').val();
        var paper_type = $('#paper_type').val();
        var papersize = $('#papersize').val();
        var gram  = $('#gram').val();

        if(brand == '') {
            toastr['warning']('Please enter Brand.');
        }
        if(amount_per_pack == '')
        {
            toastr['warning']('Please enter Amount per pack.');
        }
        if(price_per_ream == '')
        {
            toastr['warning']('Please enter Price per ream');
        }
        if(price_per_kg == '')
        {
            toastr['warning']('Please enter Price per Kg.');
        }
        if(price_per_sheet =='')
        {
            toastr['warning']('Please enter Price per Sheet.');
        }

        if(brand != '' && amount_per_pack != '' && price_per_sheet != '' && price_per_ream != '' && price_per_kg != '')
        {
            if($('#paper_id').val() == '') {
                $.ajax({
                    url : '/paper/paper_save',
                    method : 'post',
                    data : {
                        supplier_id : supplier_id,
                        suppliername : $('#supplier>:selected').text(),
                        paper_type : paper_type,
                        type_name : $('#paper_type>:selected').text(),
                        papersize : papersize,
                        unit : $('#unit').val(),
                        gram : gram,
                        brand : brand,
                        amount_per_pack : amount_per_pack,
                        price_per_ream : price_per_ream,
                        price_per_kg : price_per_kg,
                        price_per_sheet : price_per_sheet
                    },
                    success : function(data) {
                        toastr['success']('Successfully saved.');
                        $('#brand').val('');
                        $('#amount_per_pack').val('');
                        $('#price_per_ream').val('');
                        $('#price_per_kg').val('');
                        $('#price_per_sheet').val('');
                        $('#supplier').val(0);
                        $('#paper_type').val(0);
                        $('#papersize').val(0);
                        $('#gram').val(0);
                    },
                    error : function() {
                        toastr['error']('Happening any errors on server.')
                    }
                })
            } else {
                $.ajax({
                    url : '/paper/update',
                    method : 'post',
                    data : {
                        paper_id : $('#paper_id').val(),
                        supplier_id : supplier_id,
                        suppliername : $('#supplier>:selected').text(),
                        paper_type : paper_type,
                        type_name : $('#paper_type>:selected').text(),
                        papersize : papersize,
                        unit : $('#unit').val(),
                        gram : gram,
                        brand : brand,
                        amount_per_pack : amount_per_pack,
                        price_per_ream : price_per_ream,
                        price_per_kg : price_per_kg,
                        price_per_sheet : price_per_sheet
                    },
                    success : function(data) {
                        toastr['success']('Successfully saved.');
                        $('#brand').val('');
                        $('#amount_per_pack').val('');
                        $('#price_per_ream').val('');
                        $('#price_per_kg').val('');
                        $('#price_per_sheet').val('');
                        $('#supplier').val(0);
                        $('#paper_type').val(0);
                        $('#papersize').val(0);
                        $('#gram').val(0);
                    },
                    error : function() {
                        toastr['error']('Happening any errors on server.')
                    }
                })
            }
        }
    });

    $('#paper_type').change(function() {
        var type_id = $('#paper_type').val();
        $.ajax({
            url : '/paper/select_size_gram',
            method : 'post',
            data : {
                type_id : type_id
            },
            success : function(data) {
                $('#papersize').val(data.papertype.width+'*' +data.papertype.height);
                $('#gram').val(data.papertype.gram);
                $('#unit').val(data.papertype.unit);
            },
            error : function() {
                toastr['error']('Happening any errors on server.');
            }
        })
    })
});