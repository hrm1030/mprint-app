$(document).ready(function(){
    var table = $('#provider_table');
    var oTable = table.dataTable();

    $('.btn_delete').click(function() {
        console.log('delete');
        var nRow = $(this).parents('tr')[0];
        var provider_id = $(this).parents('tr').eq(0).attr('provider_id');
        $.ajax({
            url : '/provider/delete',
            method : 'post',
            data : {
                provider_id : provider_id
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