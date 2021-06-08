$(document).ready(function() {
    $('#new_p').hide();
    $('#btn_send').click(function() {
        $.ajax({
            url : '/auth/reset',
            method : 'post',
            dataType : 'json',
            data : {
                email : $('#email').val()
            },
            success : function(data) {
                toastr['success']('Please check new password : ' + data.new_password);
                $('#new_password').text(data.new_password);
                $('#new_p').show(500);
            },
            error : function() {
                toastr['error']('Happening any errors on Server.')
            }
        })
    })
})