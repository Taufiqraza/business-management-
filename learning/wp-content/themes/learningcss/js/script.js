/*$('ul.corp-menu-list').each(function(){
  var LiN = $(this).find('li').length;
  if( LiN >= 5){    
    $('li', this).eq(4).nextAll().hide().addClass('toggleable');
    $(this).append('<button class="read-more-nav" data-id="more">[More +]</button>');    
  }
  
});*/
$(document).ready(function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);

    $('body').bind('copy paste', function(e) {
        e.preventDefault();
    });
});
// New //
$(document).ready(function() {
    $(".navdropdown").click(
        function(e) {
            e.preventDefault();
            $(".navdropdown").removeClass('activecolor')
            $('.dropdown-menu.dropdown-new').fadeOut('fast');
            var data = $(this).attr('data');
            $('.dropdown-menu.newdropdow' + data).toggle();
            if ($('.dropdown-menu.newdropdow' + data).is(":visible") == true) {
                $(this).addClass("activecolor");
            } else {
                $(this).removeClass("activecolor");
            }
            $(document).mouseup(function(e) {
                if ($(e.target).closest(".newdropdow" + data).length === 0) {
                    $(".newdropdow" + data).hide();
                }
            })

            $(".activedropdow" + data).click(function(e) {
                e.preventDefault();
                $(".activedropdow" + data).removeClass('active');
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).addClass('active');
                }
            })
        })
});

$(function() {
    dropdownmenu();
});

function dropdownmenu() {
    $("a.custome_mobile_menu").click(function(e) {
        e.preventDefault();
        var data = $(this).attr('data');
        $('.custom_moblie').fadeOut('slow');
        $(".custom_mobile_menu_show" + data).toggle();
    })
    $("a.custom-main-dropdown").click(function(e) {
        e.preventDefault();
        var data1 = $(this).attr('data');
        $('.custom-main').fadeOut('slow');
        $(".custom-main-dropdown-show" + data1).toggle();
    });
}

$('.mega-dropdown-menu').on('click', function(event) {
    event.stopPropagation();
});

$('.hide-more-menu').hide();
/*$('.read-more-nav').click(function(){
    //$('.read-more-nav').html("Less"); 
	$(this).parent().nextAll('.hide-more-menu').first().toggle('slow');
	
    //$('.toggleable').toggle(600);
    if ($(this).text() == '[More +]') {
        $(this).text('[Less -]');
    } else {
        $(this).text('[More +]');
    }
});*/


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $(".nav-wrapper").addClass("bg-black");
    } else {
        $(".nav-wrapper").removeClass("bg-black");
    }
});

function closewidepop() {
    $('#alertPopDiv').css("visibility", "hidden");
}

$(".service-title-corp").html(function() {
    var text = $(this).text();
    var count = text.split(' ').length;
    if (count > 2) {
        var first = text.split(' ').slice(0, 2).join(' ');
    } else {
        var first = text.split(' ').slice(0, 1).join(' ');
    }
    return (text.length > 1 ? "<span class='red'>" + first + "</span>" : first) + text.split(first).join(' ');
});

$(document).ready(function() {
    $('.sidebar-item a.list-group-item-action').click(function() {
        $('a.list-group-item-action').removeClass("active");
        $(this).addClass("active");
    });
});

//$(".read-more-nav").click(function () {
//       alert('t');
////            $(this).text(function(i, v){
////               getDataId v === 'More' ? 'Less' : 'More'
////            })
//        });



/*function loginValidate(formObj){
	var error='';	
	var  re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var testEmail = re.test(formObj.member_email.value);	
	
	if(formObj.member_email.value==""){
		error +="\nEnter Email Address";
	}
	if(!testEmail){
        error +="\nPlease enter a valid email";
    }
	if(formObj.member_password.value==""){
		error +="\nEnter Password";
	}
	
if(error !=''){
		alert (error)
		return false
	}else{
		return true
	}

}


function resetPassValidate(formObj){
	var error='';	
	var  re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var testEmail = re.test(formObj.user_email.value);	
	
	if(formObj.user_email.value==""){
		error +="\nEnter Email Address";
	}
	if(!testEmail){
        error +="\nPlease enter a valid email";
    }	
if(error !=''){
		alert (error)
		return false
	}else{
		return true
	}

}*/

function loginValidate(formObj) {
    var error = '';
    var phoneno = /^\d{10}$/;
    var testPhone = phoneno.test(formObj.member_mobile.value);

    if (formObj.member_mobile.value == "") {
        error += "\nEnter Mobile Number";
    }
    if (!testPhone) {
        error += "\nEnter Valid Mobile Number Must be 10 digits";
    }
    if (formObj.member_mobile.value == "9999999999") {
        error += "\nEnter Valid Mobile Number";
    }

    if (error != '') {
        alert(error)
        return false
    } else {
        return true
    }

}

function otpValidate(formObj) {
    var error = '';
    var otpno = /^\d{4}$/;
    var testOtp = otpno.test(formObj.member_otp.value);

    if (formObj.member_otp.value == "") {
        error += "\nEnter OTP";
    }
    if (!testOtp) {
        error += "\nEnter Valid OTP Must be 4 digits";
    }

    if (error != '') {
        alert(error)
        return false
    } else {
        return true
    }

}

function cValidate(formObj) {
    var error = '';
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testEmail = re.test(formObj.c_email.value);
    var phoneno = /^[6-9]\d{9}$/;
    var testPhone = phoneno.test(formObj.c_phone.value);

    if (formObj.c_name.value == "") {
        error += "\nEnter Name";
    }
    if (formObj.c_email.value == "") {
        error += "\nEnter Email Address";
    }
    if (!testEmail) {
        error += "\nPlease enter a valid email";
    }
    if (formObj.c_phone.value == "") {
        error += "\nEnter Mobile Number";
    }
    if (!testPhone) {
        error += "\nEnter Valid Mobile Number Must be 10 digits and first digit greater than 5";
    }
    if (formObj.c_phone.value == "9999999999") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObj.c_phone.value == "1234567890") {
        error += "\nEnter Valid Mobile Number";
    }

    if (error != '') {
        alert(error)
        return false
    } else {
        return true
    }

}

function caValidate(formObj) {
    var error = '';
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testEmail = re.test(formObj.ca_email.value);
    var phoneno = /^[6-9]\d{9}$/;
    var testPhone = phoneno.test(formObj.ca_phone.value);

    if (formObj.ca_name.value == "") {
        error += "\nEnter Name";
    }
    if (formObj.ca_email.value == "") {
        error += "\nEnter Email Address";
    }
    if (!testEmail) {
        error += "\nPlease enter a valid email";
    }
    if (formObj.ca_phone.value == "") {
        error += "\nEnter Mobile Number";
    }
    if (!testPhone) {
        error += "\nEnter Valid Mobile Number Must be 10 digits and first digit greater than 5";
    }
    if (formObj.ca_phone.value == "9999999999") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObj.ca_phone.value == "1234567890") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObj.ca_company.value == "") {
        error += "\nEnter Company Name";
    }
    if (formObj.ca_occupation.value == "") {
        error += "\nSelect Occupation";
    }
    if (formObj.ca_city.value == "") {
        error += "\nSelect State";
    }


    if (error != '') {
        alert(error)
        return false
    } else {
        return true
    }

}

function validate(formObj) {
    var error = '';
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testEmail = re.test(formObj.email.value);
    var phoneno = /^[6-9]\d{9}$/;
    var testPhone = phoneno.test(formObj.phone.value);

    if (formObj.name.value == "") {
        error += "\nEnter Name";
    }
    if (formObj.email.value == "") {
        error += "\nEnter Email Address";
    }
    if (!testEmail) {
        error += "\nPlease enter a valid email";
    }
    if (formObj.phone.value == "") {
        error += "\nEnter Mobile Number";
    }
    if (!testPhone) {
        error += "\nEnter Valid Mobile Number Must be 10 digits and first digit greater than 5";
    }
    if (formObj.phone.value == "9999999999") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObj.phone.value == "1234567890") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObj.city.value == "") {
        error += "\nSelect State";
    }


    if (error != '') {
        alert(error)
        return false
    } else {
        fbq('track', 'Lead');
        return true
    }

}

function validateHead(formObjhead) {
    var error = '';
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testEmail = re.test(formObjhead.email.value);
    var phoneno = /^[6-9]\d{9}$/;
    var testPhone = phoneno.test(formObjhead.phone.value);

    if (formObjhead.name.value == "") {
        error += "\nEnter Name";
    }
    if (formObjhead.email.value == "") {
        error += "\nEnter Email Address";
    }
    if (!testEmail) {
        error += "\nPlease enter a valid email";
    }
    if (formObjhead.phone.value == "") {
        error += "\nEnter Mobile Number";
    }
    if (!testPhone) {
        error += "\nEnter Valid Mobile Number Must be 10 digits and first digit greater than 5";
    }
    if (formObjhead.phone.value == "9999999999") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObjhead.phone.value == "1234567890") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObjhead.city.value == "") {
        error += "\nSelect State";
    }


    if (error != '') {
        alert(error)
        return false
    } else {
        fbq('track', 'Lead');
        return true
    }

}

function popValidate(formObjpop) {
    var error = '';
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testEmail = re.test(formObjpop.email.value);
    var phoneno = /^[6-9]\d{9}$/;
    var testPhone = phoneno.test(formObjpop.phone.value);

    if (formObjpop.name.value == "") {
        error += "\nEnter Name";
    }
    if (formObjpop.email.value == "") {
        error += "\nEnter Email Address";
    }
    if (!testEmail) {
        error += "\nPlease enter a valid email";
    }
    if (formObjpop.phone.value == "") {
        error += "\nEnter Mobile Number";
    }
    if (!testPhone) {
        error += "\nEnter Valid Mobile Number Must be 10 digits and first digit greater than 5";
    }
    if (formObjpop.phone.value == "9999999999") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObjpop.phone.value == "1234567890") {
        error += "\nEnter Valid Mobile Number";
    }
    if (formObjpop.city.value == "") {
        error += "\nSelect State";
    }


    if (error != '') {
        alert(error)
        return false
    } else {
        fbq('track', 'Lead');
        return true
    }

}

function newPassValidate(formObj) {
    var error = '';
    // validate password   
    var npw = formObj.new_password.value;
    if (npw == "") {
        error += "\nPlease fill password";
    }

    //   validate confirm password
    var ncpw = formObj.new_cpassword.value;
    if (ncpw == "") {
        error += "\nPlease fill confirm password";
    }

    // validate password match
    if (npw != '' && ncpw != '') {
        if (npw != ncpw) {
            error += "\nPassword mismatch";
        }
    }

    if (error != '') {
        alert(error)
        return false
    } else {
        return true
    }

}


function stopVideo() {
    $('.videoPlayer').remove();
    location.reload(400);
}




/*function evValidate(formObj){
	var error='';
	
	if(formObj.language.value<=0){
		error +="\nSelect Language";
	}		
	if(formObj.pincode.value==""){
		error +="\nEnter Area Pincode";
	}
	if(formObj.otp.value==""){
		error +="\nEnter OTP";
	}
if(error !=''){
		alert (error)
		return false
	}else{
		return true
	}

}*/

function getResendOTP(enquiryID, custPhone) {
    $.ajax({
        type: "POST",
        url: "getResendotp.php",
        data: "enquiry_id=" + enquiryID + "&cust_phone=" + custPhone,
        cache: false,
        success: function(response) {
            if (response == 'success') {
                $('.msg-otp').html('Re-Send Verification Code Successfully').show();
            }
        }
    });
}

$(document).ready(function() {
    setTimeout(function() {
        $('#myModal').modal('show');
    }, 10000);
});