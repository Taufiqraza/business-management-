<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    <script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="556d817cd175872fd162c083-|49" defer></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-23GJ6KD8KW" type="556d817cd175872fd162c083-text/javascript"></script>
</head>
<body>
<?php include 'header.php'?>
    <section id="login-container" class="position-relative">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="login-slider" style="background-color: #202020; height: 90vh;">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <div class="login-card">
                                    <div class="login-img-back"> <img src="#" alt="India’s Preferred Consultation Platform"> </div>
                                    <h3>India’s Preferred Consultation Platform</h3>
                                    <p>Over 1000+ clients get legal support every day. We take pride in being the preferred destination for all legal support.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="login-card">
                                    <div class="login-img-back"> <img src="img/login-slider2.png" alt="Get Regular Updates"> </div>
                                    <h3>Get Regular Updates</h3>
                                    <p>Manage your time by staying update on all services, it will help you in increasing efficiency.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="login-card">
                                    <div class="login-img-back"> <img src="img/login-slider3.png" alt="Manage your businesses under one roof"> </div>
                                    <h3>Manage your businesses under one roof</h3>
                                    <p>Manage, analyse, and monitor all of your business from a single accessible dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="login-left"> <img src="assets/images/logo/logo-dark-colored.png" alt="Corpbiz">
                        <h2>Login</h2>
                        <p class="login-sub-heading">Login and Join the league of 1 Million+ People and get the most out of all the services you use.</p>
                        <div class="form-login">
                          <form action="#" name="formObj" method="post" onSubmit="return handleFormSubmit(event)">
                            <label>*Mobile Number</label>
                            <div class="position-relative">
                              <input type="text" name="member_mobile" id="member_mobile" placeholder="Enter Your Mobile No*" class="form-control" minlength="10" maxlength="10" size="10" required data-validation-required-message="Please enter your mobile No." autocomplete="off">
                              <img src="img/phone-login.png" alt="Login" class="phone-login-icon">
                            </div>
                            <button type="submit" value="Login">Login</button>
                            <p class="create-account">Login With Email ID and Password <a href="login-with-email">Click Login</a></p>
                          </form>
                          
                          <!-- OTP Modal -->
                          <div id="otp-modal" class="modal">
                            <div class="modal-cont">
                              <span class="close">&times;</span>
                              <label>OTP</label>
                              <input type="text" id="otp-input" placeholder="Enter OTP">
                              <button id="verify-otp">Verify OTP</button>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="556d817cd175872fd162c083-text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js" type="556d817cd175872fd162c083-text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/jquery.counterup/1.0/jquery.counterup.min.js" type="556d817cd175872fd162c083-text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" type="556d817cd175872fd162c083-text/javascript"></script>
    <script src="js/bootstrap.bundle.js" type="556d817cd175872fd162c083-text/javascript"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"
        type="556d817cd175872fd162c083-text/javascript"></script>
    <script src="js/script.js" type="556d817cd175872fd162c083-text/javascript"></script>
    <script type="556d817cd175872fd162c083-text/javascript">
        $('.login-slider .owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    </script>
    <script>
 function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const mobileNumber = document.getElementById('member_mobile').value;

  // Generate the OTP
  const otp = generateOTP();
  alert(`Your OTP is: ${otp}`);

  // Show the OTP modal
  showModal();

  document.getElementById('verify-otp').addEventListener('click', () => {
    const enteredOtp = document.getElementById('otp-input').value;

    if (enteredOtp === otp.toString()) {
      window.location.href = '/logged_in.html';
    } else {
      alert('Invalid OTP. Please try again.');
    }
  });
}

function showModal() {
  const modal = document.getElementById('otp-modal');
  const span = document.getElementsByClassName('close')[0];

  // Show the modal
  modal.style.display = 'block';


  span.onclick = function() {
    modal.style.display = 'none';
  }

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}
    </script>
</body>

</html>