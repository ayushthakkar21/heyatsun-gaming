// // this is testimonial's java script
// const testimonialsContainer = document.querySelector(".testimonials-container");
// const testimonial = document.querySelector(".testimonial");
// const userImage = document.querySelector(".user-image");
// const username = document.querySelector(".username");
// const role = document.querySelector(".role");

// const testimonials = [
//     {
//         name: "Heet Moreker",
//         position: "e-sports player",
//         photo:"/assets/images/test-avtar2.jpg",
//         text:
//         "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
//     },
//     {
//         name: "ayush thakkar",
//         position: "proffesional gamer",
//         photo: "/assets/images/test-avtar3.jpg",
//         text:
//         "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
//     },
//     {
//         name: "anant shah",
//         position: "happy customer",
//         photo: "/assets/images/test-avtar4.jpg",
//         text:
//         "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
//     },
//     {
//         name: "jay doshi",
//         position: "satisfied buyer",
//         photo: "/assets/images/test-avtar5.jpg",
//         text:
//         "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
//     },
// ];

// let idx = 1;

// function updateTestimonial() {
//     const { name, position, photo, text } = testimonials[idx];

//     testimonial.innerHTML = text;
//     userImage.src = photo;
//     username.innerHTML = name;
//     role.innerHTML = position;

//     idx++;

//     if (idx > testimonials.length - 1) {
//         idx = 0;
//     }
// }

// setInterval(updateTestimonial, 6000);


// this is testimonial's java script




$(document).ready(function () {
  $(".bottom-to-top").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  $('.toggler').click(function () {
    $('.mobile-nav').toggleClass('left-open')
    $('.mobile-nav').removeClass('left-close')
  });
  $('.mobile-back').click(function () {
    $('.mobile-nav').toggleClass('left-close')
    $('.mobile-nav').removeClass('left-open')
  });
});


$(window).on('load', function () {
  $(".loader-wrapper").delay(1500).fadeOut("fast");
});






// ---------------------------------------- gallery script ----------------------------------------//

filterSelection("ps5")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("gallery-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("filter-active");
    current[0].className = current[0].className.replace(" filter-active", "");
    this.className += " filter-active";
  });
}

// ---------------------------------------- gallery script ----------------------------------------//


// ---------------------------------------- gallery script ----------------------------------------//
$(document).ready(function () {
  $(window).scroll(function () {
    if (scrollY > 500) {
      $(".bottom-to-top").fadeIn(500);
      $("header").addClass("sticky");
    }
    else {
      // $(".bottom-to-top").fadeOut(500);
      $("header").removeClass("sticky");
    }
    if (scrollY > 500) {
      $(".bottom-to-top").fadeIn(500);
      $("header").addClass("sticky");
    }
    else {
      $(".bottom-to-top").fadeOut(500);
      $("header").removeClass("sticky");
    }
  });
});

