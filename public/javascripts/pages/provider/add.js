$(document).ready(function() {


    $('#btn_save').click(function() {
        var provider = $('#provider').val();
        var contactperson = $('#contactperson').val();
        var tel_1 = $('#tel_1').val();
        var tel_2 = $('#tel_2').val();
        var fax = $('#fax').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var other = $('#other').val();
        if(provider == '')
        {
            toastr['warning']('Please enter provider Name');
        }
        if(contactperson == '') 
        {
            toastr['warning']('Please enter Contact Person');
        }
        if(tel_1 == '')
        {
            toastr['warning']('Please enter first telephone number');
        }
        if(tel_2 == '')
        {
            toastr['warning']('Please enter second telephone number');
        }
        if(fax == '')
        {
            toastr['warning']('Please enter Fax.');
        }
        if(email == '') 
        {
            toastr['warning']('Please enter Email');
        }
        if(address == '')
        {
            toastr['warning']('Please enter Address');
        }
        if(other == '')
        {
            toastr['warning']('Please enter Other or Line ID or remarks');
        }
        if(provider != '' && contactperson != '' && tel_1 != '' && tel_2 != '' && fax != '' && email != '' && address != '' && other != '')
        {
            $('#providerForm').submit();
        }
    })
});