$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });
    $("#top-icon").click(function(){            
      $('html, body').animate({
              scrollTop: $("#scroll-top").position().top-50
          }, 1000);
    });
    $("#index-go-btn").click(function(){
      $("#index-go-btn").css("background-color", "white");
      $("#index-go-btn").css("color", "rgb(33, 31, 96)");
      $("#index-supply-btn").css("background-color", "rgb(33, 31, 96)");
      $("#index-supply-btn").css("color", "white");
      $("#index-supply-products").addClass("hide");
      $("#index-go-products").removeClass("hide");
    });
      
    $("#index-supply-btn").click(function(){
      $("#index-supply-btn").css("background-color", "white");
      $("#index-supply-btn").css("color", "rgb(33, 31, 96)");
      $("#index-go-btn").css("background-color", "rgb(33, 31, 96)");
      $("#index-go-btn").css("color", "white");
      $("#index-go-products").addClass("hide");
      $("#index-supply-products").removeClass("hide");
      
    });
    $(".collapse").on('show.bs.collapse', function() {
      $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function() {
      $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  $('#profile-nav-home').hover(function(){
    $(this).toggleClass('profile-nav-item-hover');
    $('#profile-nav-home-a').toggleClass('profile-nav-item-a-hover');
  });
  $('#profile-nav-docs').hover(function(){
    $(this).toggleClass('profile-nav-item-hover');
    $('#profile-nav-docs-a').toggleClass('profile-nav-item-a-hover');
  });
  $('#profile-nav-ul').hover(function(){
    $(this).toggleClass('profile-nav-item-hover');
    $('#profile-nav-ul-a').toggleClass('profile-nav-item-a-hover');
  });
  $('#profile-nav-help').hover(function(){
    $(this).toggleClass('profile-nav-item-hover');
    $('#profile-nav-help-a').toggleClass('profile-nav-item-a-hover');
  });
  $('#profile-nav-set').hover(function(){
    $(this).toggleClass('profile-nav-item-hover');
    $('#profile-nav-set-a').toggleClass('profile-nav-item-a-hover');
  });

  $("#doc-fin").click(function(){
    $("#doc-fin-body").removeClass("hide");
    $("#doc-lp-body").addClass("hide");
    $("#doc-reg-body").addClass("hide");
    $("#doc-ass-body").addClass("hide");
    $("#doc-bus-body").addClass("hide");
    $("#doc-fin-div").addClass("mrf-active");
    $("#doc-lp-div").removeClass("mrf-active");
    $("#doc-reg-div").removeClass("mrf-active");
    $("#doc-ass-div").removeClass("mrf-active");
    $("#doc-bus-div").removeClass("mrf-active");
  });

  $("#doc-lp").click(function(){
    $("#doc-lp-body").removeClass("hide");
    $("#doc-fin-body").addClass("hide");
    $("#doc-reg-body").addClass("hide");
    $("#doc-ass-body").addClass("hide");
    $("#doc-bus-body").addClass("hide");
    $("#doc-lp-div").addClass("mrf-active");
    $("#doc-fin-div").removeClass("mrf-active");
    $("#doc-reg-div").removeClass("mrf-active");
    $("#doc-ass-div").removeClass("mrf-active");
    $("#doc-bus-div").removeClass("mrf-active");
  });

  $("#doc-reg").click(function(){
    $("#doc-reg-body").removeClass("hide");
    $("#doc-fin-body").addClass("hide");
    $("#doc-lp-body").addClass("hide");
    $("#doc-ass-body").addClass("hide");
    $("#doc-bus-body").addClass("hide");
    $("#doc-reg-div").addClass("mrf-active");
    $("#doc-fin-div").removeClass("mrf-active");
    $("#doc-lp-div").removeClass("mrf-active");
    $("#doc-ass-div").removeClass("mrf-active");
    $("#doc-bus-div").removeClass("mrf-active");
  });

  $("#doc-ass").click(function(){
    $("#doc-ass-body").removeClass("hide");
    $("#doc-fin-body").addClass("hide");
    $("#doc-reg-body").addClass("hide");
    $("#doc-lp-body").addClass("hide");
    $("#doc-bus-body").addClass("hide");
    $("#doc-ass-div").addClass("mrf-active");
    $("#doc-fin-div").removeClass("mrf-active");
    $("#doc-reg-div").removeClass("mrf-active");
    $("#doc-lp-div").removeClass("mrf-active");
    $("#doc-bus-div").removeClass("mrf-active");
  });

  $("#doc-bus").click(function(){
    $("#doc-bus-body").removeClass("hide");
    $("#doc-fin-body").addClass("hide");
    $("#doc-reg-body").addClass("hide");
    $("#doc-ass-body").addClass("hide");
    $("#doc-lp-body").addClass("hide");
    $("#doc-bus-div").addClass("mrf-active");
    $("#doc-fin-div").removeClass("mrf-active");
    $("#doc-reg-div").removeClass("mrf-active");
    $("#doc-ass-div").removeClass("mrf-active");
    $("#doc-lp-div").removeClass("mrf-active");
  });
  $("#form-bio").click(function(){
    $("#form-bio-body").removeClass("hide");
    $("#form-eap-body").addClass("hide");
    $("#form-ek-body").addClass("hide");
    $("#form-pi-body").addClass("hide");
    $("#form-sar-body").addClass("hide");
    $("#form-daf-body").addClass("hide");
    $("#form-bio-div").addClass("mrf-active");
    $("#form-eap-div").removeClass("mrf-active");
    $("#form-ek-div").removeClass("mrf-active");
    $("#form-pi-div").removeClass("mrf-active");
    $("#form-sar-div").removeClass("mrf-active");
    $("#form-daf-div").removeClass("mrf-active");
  });

  $("#form-eap").click(function(){
    $("#form-eap-body").removeClass("hide");
    $("#form-bio-body").addClass("hide");
    $("#form-ek-body").addClass("hide");
    $("#form-pi-body").addClass("hide");
    $("#form-sar-body").addClass("hide");
    $("#form-daf-body").addClass("hide");
    $("#form-eap-div").addClass("mrf-active");
    $("#form-bio-div").removeClass("mrf-active");
    $("#form-ek-div").removeClass("mrf-active");
    $("#form-pi-div").removeClass("mrf-active");
    $("#form-sar-div").removeClass("mrf-active");
    $("#form-daf-div").removeClass("mrf-active");
  });

  $("#form-ek").click(function(){
    $("#form-ek-body").removeClass("hide");
    $("#form-bio-body").addClass("hide");
    $("#form-eap-body").addClass("hide");
    $("#form-pi-body").addClass("hide");
    $("#form-sar-body").addClass("hide");
    $("#form-daf-body").addClass("hide");
    $("#form-ek-div").addClass("mrf-active");
    $("#form-bio-div").removeClass("mrf-active");
    $("#form-eap-div").removeClass("mrf-active");
    $("#form-pi-div").removeClass("mrf-active");
    $("#form-sar-div").removeClass("mrf-active");
    $("#form-daf-div").removeClass("mrf-active");
  });

  $("#form-pi").click(function(){
    $("#form-pi-body").removeClass("hide");
    $("#form-bio-body").addClass("hide");
    $("#form-ek-body").addClass("hide");
    $("#form-eap-body").addClass("hide");
    $("#form-sar-body").addClass("hide");
    $("#form-daf-body").addClass("hide");
    $("#form-pi-div").addClass("mrf-active");
    $("#form-bio-div").removeClass("mrf-active");
    $("#form-ek-div").removeClass("mrf-active");
    $("#form-eap-div").removeClass("mrf-active");
    $("#form-sar-div").removeClass("mrf-active");
    $("#form-daf-div").removeClass("mrf-active");
  });

  $("#form-sar").click(function(){
    $("#form-sar-body").removeClass("hide");
    $("#form-bio-body").addClass("hide");
    $("#form-ek-body").addClass("hide");
    $("#form-pi-body").addClass("hide");
    $("#form-eap-body").addClass("hide");
    $("#form-daf-body").addClass("hide");
    $("#form-sar-div").addClass("mrf-active");
    $("#form-bio-div").removeClass("mrf-active");
    $("#form-ek-div").removeClass("mrf-active");
    $("#form-pi-div").removeClass("mrf-active");
    $("#form-eap-div").removeClass("mrf-active");
    $("#form-daf-div").removeClass("mrf-active");
  });

  $("#form-daf").click(function(){
    $("#form-daf-body").removeClass("hide");
    $("#form-bio-body").addClass("hide");
    $("#form-ek-body").addClass("hide");
    $("#form-pi-body").addClass("hide");
    $("#form-eap-body").addClass("hide");
    $("#form-sar-body").addClass("hide");
    $("#form-daf-div").addClass("mrf-active");
    $("#form-bio-div").removeClass("mrf-active");
    $("#form-ek-div").removeClass("mrf-active");
    $("#form-pi-div").removeClass("mrf-active");
    $("#form-eap-div").removeClass("mrf-active");
    $("#form-sar-div").removeClass("mrf-active");
  });
    $(".mrf-tab").click(function(){
      if ($(window).width() < 768) {
        $('html, body').animate({
          scrollTop: $("#nav-scroll-top").position().top-50
      }, 1000);
      }
    });
    $("#dis-btn-1").click(function(){
      $("#dis-btn-1").toggleClass("red-header");
      $("#dis-btn-2").removeClass("red-header");
      $("#dis-btn-3").removeClass("red-header");
      $("#dis-btn-4").removeClass("red-header");
    });
    $("#dis-btn-2").click(function(){
      $("#dis-btn-2").toggleClass("red-header");
      $("#dis-btn-1").removeClass("red-header");
      $("#dis-btn-3").removeClass("red-header");
      $("#dis-btn-4").removeClass("red-header");
    });
    $("#dis-btn-3").click(function(){
      $("#dis-btn-3").toggleClass("red-header");
      $("#dis-btn-1").removeClass("red-header");
      $("#dis-btn-2").removeClass("red-header");
      $("#dis-btn-4").removeClass("red-header");
    });
    $("#dis-btn-4").click(function(){
      $("#dis-btn-4").toggleClass("red-header");
      $("#dis-btn-1").removeClass("red-header");
      $("#dis-btn-2").removeClass("red-header");
      $("#dis-btn-3").removeClass("red-header");
    });
    $("#set-gen").click(function(){
      $("#set-gen-body").removeClass("hide");
      $("#set-acc-body").addClass("hide");
      $("#set-sl-body").addClass("hide");
      $("#set-gen-div").addClass("tab-active");
      $("#set-acc-div").removeClass("tab-active");
      $("#set-sl-div").removeClass("tab-active");
    });
    $("#set-sl").click(function(){
      $("#set-sl-body").removeClass("hide");
      $("#set-acc-body").addClass("hide");
      $("#set-gen-body").addClass("hide");
      $("#set-sl-div").addClass("tab-active");
      $("#set-acc-div").removeClass("tab-active");
      $("#set-gen-div").removeClass("tab-active");
    });
    $("#set-acc").click(function(){
      $("#set-acc-body").removeClass("hide");
      $("#set-sl-body").addClass("hide");
      $("#set-gen-body").addClass("hide");
      $("#set-acc-div").addClass("tab-active");
      $("#set-sl-div").removeClass("tab-active");
      $("#set-gen-div").removeClass("tab-active");
    });
    $('#paymentModal').on('hidden.bs.modal', function (e) {
      $(this)
        .find("input,textarea,select")
           .val('')
           .end()
        .find("input[type=checkbox], input[type=radio]")
           .prop("checked", "")
           .end();
           $("#paypalNext").addClass("hide");
           $("#nextPay").removeClass("hide");
    });
    $("#editCurr").click(function(){
      $('#paymentModal').modal('hide');
    });
    $("#editTax").click(function(){
      $('#paymentModal').modal('hide');
    });
    $(".back-pay").click(function(){
      $('#paymentModal').modal('show');
      $("#paypalNext").addClass("hide");
      $("#nextPay").removeClass("hide");
    });
    $("#backCurr").click(function(){
      $('#paymentModal').modal('show');
    });
    $("#nextBank").click(function(){
      $('.bankModal').modal('hide');
    });
    $("#cancelBank").click(function(){
      $('.bankModal').removeClass('hide');
      $('.bankModal').modal('show');
    });
    $('#nextPay').click(function payNext() {
      $('#paymentModal').modal('hide');
      const card = document.getElementById('card');
      const payPal = document.getElementById('payPal');
      const bank = document.getElementById('bank');
      const cardModal = document.getElementById('cardModal');
      const paypalModal = document.getElementById('paypalModal');
      const bankModal = document.getElementById('bankModal');
      const paypalNext = document.getElementById('paypalNext');
      const nextPay = document.getElementById('nextPay');

      
      
      if (card.checked === false && payPal.checked === false && bank.checked === false) {
          alert('Please complete all required fields');
          return false;
      } else if (card.checked === true) {
        cardModal.classList.remove("hide");
        paypalModal.classList.add("hide");
        bankModal.classList.add("hide");
        paypalNext.classList.add("hide");
        nextPay.classList.remove("hide");
              
          } else if (payPal.checked === true) {
            paypalNext.classList.remove("hide");
            nextPay.classList.add("hide");
            cardModal.classList.add("hide");
            bankModal.classList.add("hide");
              
          } else if (bank.checked === true) {
            bankModal.classList.remove("hide");
            paypalModal.classList.add("hide");
            cardModal.classList.add("hide");
            paypalNext.classList.add("hide");
            nextPay.classList.remove("hide");
          }
      });
    

  });