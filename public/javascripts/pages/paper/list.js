$(document).ready(function() {
    table = $('#paper_table');
    oTable = table.dataTable();
    table.on('click', '.btn_delete', function() {
        var nRow = $(this).parents('tr')[0];
        $.ajax({
            url : '/paper/delete',
            method : 'post',
            data : {
                paper_id : $(this).attr('paper_id')
            },
            success : function(data) {
                toastr['success']('Successfully deleted.');
                oTable.fnDeleteRow(nRow);
            },
            error : function() {
                toastr['error']('Happening any errors on server.');
            }
        })
    });
});