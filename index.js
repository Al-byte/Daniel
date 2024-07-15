window.onload = function() {
  Particles.init ({
    selector: '.background',
    color: ['#24FFFF', '#0D5B6F'],
    connectParticles: true
  });
};

function validatePassword() {
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
  
    // Define your password validation criteria here
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var codeWord ="starkknowsthis...";

    // Redirect to a new URL
    function redirectTo(url) {
        window.location.href = url;
    }

  
    if (password.match(codeWord)) {
      message.style.color = "green";
      message.textContent = "Password is valid ✔";
      redirectTo("./message.html");
    } else {
      message.style.color = "red";
      message.textContent = "Password is invalid.";
    }
  }
  