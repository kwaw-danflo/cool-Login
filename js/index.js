$('.message a').click(function () {
    $('form').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});



$(document).ready(function () {

      
    $('#signupBtn').click(function () {

        console.log('btn clicked')
        var postdata = getData();

        postData(postdata);



    })


})




function getData() {
    console.log('Get data called');
    var signupName = $('#signupName').val();
    var signupPassword = $('#signupPassword').val();
    var website = $('#website').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var employees = $('#employees').val();
    var tablets = $('#tablets').val();
    var category = $('#category').val();


    var registerData = {
        'name': signupName,
        'password': signupPassword,
        'website': website,
        'address': address,
        'email': email,
        'employees': employees,
        'tablets': tablets,
        'category': category


    }

    return JSON.stringify(registerData);

}

function postData(dataString) {
    console.log(dataString);
//    while_waiting_message();

    $.ajax({
        url: 'https://client.teamcyst.com/feedbackapp/register.php',
        method: 'POST',
        //        crossDomain: true,
        contentType: 'application/javascript',
        data: dataString,

        success: function (data) {
//            succcesful(data);
            console.log(data);



        },

        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);



        }
    })

}



function while_waiting_message() {
    swal({
        title: 'Payment Pending',
        text: 'Please check your phone to Accept the payment',
        confirmButtonText: 'Please wait',
        allowOutsideClick: false,
        showConfirmButton: false,

    });
}

function succcesful(response) {
    if (response === 'success') {
        swal({
            title: ' whossh you just gave out your money, pray it was worth it',
            text: 'Thank you ',
            type: 'success',
            confirmButtonText: 'Done',
            allowOutsideClick: false,
            timer: 2500
        });
    } else {

        swal({
            title: 'Payment Failed',
            text: 'Ooops that is strange, Please try again',
            confirmButtonText: 'Please  try again',
            allowOutsideClick: false,
            showConfirmButton: true,
            showConfirmButton: true,

        });

    }


}