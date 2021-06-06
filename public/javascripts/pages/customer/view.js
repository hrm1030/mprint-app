$(document).ready(function() {

    var table = $('#customer_table');
    var oTable = table.dataTable();

    $('.btn_delete').click(function() {
        console.log('delete');
        var nRow = $(this).parents('tr')[0];
        var customer_id = $(this).parents('tr').eq(0).attr('customer_id');
        $.ajax({
            url : '/customer/delete',
            method : 'post',
            data : {
                customer_id : customer_id
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