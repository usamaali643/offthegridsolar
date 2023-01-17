//Get the button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Preloader
$(window).on("load", function () {
  // makes sure the whole site is loaded
  $("#loader").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(550).css({ overflow: "visible" });
});
// Ellipse function
const ellipseButton = document.getElementsByClassName("ellipse-handle");

[].forEach.call(ellipseButton, (item, index) => {
  item.addEventListener("click", () => {
    const dot = item.parentNode.getElementsByClassName("dots")[0];
    const more = item.parentNode.getElementsByClassName("more")[0];
    if (dot.style.display === "none") {
      dot.style.display = "initial";
      more.style.display = "none";
      item.innerHTML = "Read more";
    } else {
      dot.style.display = "none";
      more.style.display = "initial";
      item.innerHTML = "Read less";
    }
  });
});

// Jquery Functions
$(document).ready(function () {
  ///NAVBAR Change

  // // Animation On Scroll
  AOS.init();
  //testimonial carasouel
  $("#testimonialSlider").owlCarousel({
    margin: 10,
    nav: false,
    dot: false,
    loop: true,
    toucDrag: true,
    pullDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,

        margin: 20,
      },
    },
  });
  // Counter
  $(".counter-count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          //chnage count up speed here
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
  // OUR GALLERY
  // Gallery image hover
  $(".img-wrapper").hover(
    function () {
      $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
    },
    function () {
      $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
    }
  );

  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $(
    '<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'
  );
  var $nextButton = $(
    '<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'
  );
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

  // Add overlay
  $overlay
    .append($image)
    .prepend($prevButton)
    .append($nextButton)
    .append($exitButton);
  $("#gallery").append($overlay);

  // Hide overlay on default
  $overlay.hide();

  // When an image is clicked
  $(".img-overlay").click(function (event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image.attr("src", imageLocation);
    // Fade in the overlay
    $overlay.fadeIn("slow");
  });

  // When the overlay is clicked
  $overlay.click(function () {
    // Fade out the overlay
    $(this).fadeOut("slow");
  });

  // When next button is clicked
  $nextButton.click(function (event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    // If there is a next image
    if ($nextImg.length > 0) {
      // Fade in the next image
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      // Otherwise fade in the first image
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
  });

  // When previous button is clicked
  $prevButton.click(function (event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
  });

  // When the exit button is clicked
  $exitButton.click(function () {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
  });
  // Gallery End
});
