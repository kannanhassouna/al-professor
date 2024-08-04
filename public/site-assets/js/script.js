let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);

  // handle responsiveness
  if (window.innerWidth <= 980) {
    document.body.classList.add("is-mobile");
  }
};

window.addEventListener("resize", () => {
  console.log("resizing ");
  console.log(window.innerWidth);
  if (window.innerWidth <= 980) {
    document.body.classList.add("is-mobile");
  } else {
    document.body.classList.remove("is-mobile");
  }
});

$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".header-last-part").toggleClass("showing");
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });

    //slide down menu
    $(".menu-name").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-display-2").slideToggle(400);
      $(".menu-name").not(this).siblings(".cats-display-2").slideUp(400);
      if ($(window).width() <= 991) {
        $(this).toggleClass("active");
        $(".menu-name").not(this).removeClass("active");
      }
    });
  }

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

  ////////////** counter  *///////////////////////////////
  var ax = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    // Md.Asaduzzaman Muhid
    if (ax == 0 && $(window).scrollTop() > oTop) {
      $(".counter-number").each(function () {
        var $this = $(this);
        var text = $this.text().trim();
        var value = parseFloat(text);

        // Check if the text contains 'K', 'M', or 'B' and convert to a number
        if (text.includes("K")) {
          value *= 1000;
        } else if (text.includes("M")) {
          value *= 1000000;
        } else if (text.includes("B")) {
          value *= 1000000000;
        }

        jQuery({
          Counter: 0,
        }).animate(
          {
            Counter: value,
          },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              // If original text contained 'K', 'M', or 'B', add it back to the text
              var displayValue = Math.ceil(this.Counter);
              if (text.includes("K")) {
                displayValue = (this.Counter / 1000).toFixed(0) + "K";
              } else if (text.includes("M")) {
                displayValue = (this.Counter / 1000000).toFixed(0) + "M";
              } else if (text.includes("B")) {
                displayValue = (this.Counter / 1000000000).toFixed(0) + "B";
              }
              $this.text(displayValue);
            },
          }
        );
      });
      ax = 1; // Md.Asaduzzaman Muhid
    }
  });

  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }

  $(".footer-accordion").click(function () {
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", "200px");
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});

////////////////////////////////////// fancybox  /////////////////////////////////////////
/*
$('[data-fancybox]').fancybox({
  // Options will go here
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  wheel : false,
  transitionEffect: "slide",
   // thumbs          : false,
  // hash            : false,
  loop            : true,
  // keyboard        : true,
  toolbar         : false,
  // animationEffect : false,
  // arrows          : true,
  clickContent    : false,
  protect: true
});
*/
