$(document).ready(function(){
    var table = $('#supplier_table');
    var oTable = table.dataTable();

    $('.btn_delete').click(function() {
        console.log('delete');
        var nRow = $(this).parents('tr')[0];
        var supplier_id = $(this).parents('tr').eq(0).attr('supplier_id');
        $.ajax({
            url : '/supplier/delete',
            method : 'post',
            data : {
                supplier_id : supplier_id
            },
            success : function (data) {
                toastr['success']('Successfully deleted.');
                oTable.fnDeleteRow(nRow);
            },
            error : function() {
                toastr['error']('Happening any errors on customer delete.');
            }
        })
    })
})