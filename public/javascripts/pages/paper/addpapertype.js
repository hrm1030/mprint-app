$(document).ready(function() {
    var table = $('#papertype_table');
    var oTable = table.dataTable();

    $('#size_1').click(function() {
        $('#width').val(22);
        $('#height').val(34);
    });

    $('#size_2').click(function() {
        $('#width').val(24);
        $('#height').val(34);
    });
    
    $('#size_3').click(function() {
        $('#width').val(24);
        $('#height').val(35);
    });

    $('#size_4').click(function() {
        $('#width').val(27);
        $('#height').val(34);
    });

    $('#size_5').click(function() {
        $('#width').val(31);
        $('#height').val(43);
    });

    $('#gram_1').click(function() {
        $('#gram').val(60);
    });

    $('#gram_2').click(function() {
        $('#gram').val(70);
    });

    $('#gram_3').click(function() {
        $('#gram').val(100);
    });

    $('#gram_4').click(function() {
        $('#gram').val(120);
    });

    $('#gram_5').click(function() {
        $('#gram').val(200);
    });

    $('#gram_6').click(function() {
        $('#gram').val(500);
    });

    
    $('#btn_save').click(function() {
        var paper_type = $('#paper_type').val();
        var width = $('#width').val();
        var height = $('#height').val();
        var gram = $('#gram').val();
        var unit = $("input[name='unit']:checked").val();

        if(paper_type == '')
        {
            toastr['warning']('Please enter Paper Type.');
        }
        if(width == '')
        {
            toastr['warning']('Please enter paper width.');
        }
        if(height == '')
        {
            toastr['warning']('Please enter paper height.');
        }
        if(gram == '') 
        {
            toastr['warning']('Please enter gram.');
        }
        if(unit == '')
        {
            toastr['warning']('Please select unit.')
        }

        if(paper_type != '' && width != '' && height != '' && gram != '' && unit != '')
        {
            $.ajax({
                url : '/paper/paper_type_save',
                method : 'post',
                data : {
                    paper_type : paper_type,
                    width : width,
                    height : height,
                    unit : unit,
                    gram : gram
                },
                success : function(data) {
                    toastr['success']('Successfully saved.');
                    $('#paper_type').val('');
                    $('#width').val('');
                    $('#height').val('');
                    $('#gram').val('');
                    $('#unit').val('');
                    var return_type = data.paper_type.type_name;
                    var return_size = data.paper_type.width +'*'+ data.paper_type.height + '('+ data.paper_type.unit +')';
                    var return_gram = data.paper_type.gram
                    var button  = '<button type="button" type_id="'+data.paper_type._id+'" class="button is-small is-danger btn_delete" ><i class="fas fa-trash"></i></button>';
                    oTable.fnAddData([return_type, return_size, return_gram, button]);
                },
                error : function() {
                    toastr['error']('Happening any errors on server.');
                }
            });
        }
    });

    table.on('click', '.btn_delete', function(e) {
        var type_id = $(this).attr('type_id');
        var nRow = $(this).parents('tr')[0];
        $.ajax({
            url : '/paper/paper_type_delete',
            method : 'post',
            data : {
                type_id : type_id
            },
            success : function(data) {
                toastr['success']('Successfully deleted.');
                oTable.fnDeleteRow(nRow);
            },
            error : function() {
                toastr['error']('Happening any errors on server.');
            }
        })
    })

    
})