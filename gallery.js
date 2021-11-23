$(document).ready(function () {
  $(".project-screen").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    speed: 500,
    fade: false,
    cssEase: "linear",
    draggable: false,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-circle-right fa-6x"></i></button>`,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-circle-left fa-6x"></i></button>`,
    asNavFor: '.nav-project-screen',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          draggable: true,
          nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-circle-right"></i></button>`,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-circle-left"></i></button>`,
        }
      }
    ]
  });
});
$('.nav-project-screen').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  asNavFor: '.project-screen',
  focusOnSelect: true,
  dots: false,
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      slidesToShow: 3,
      slidesToScroll: 3,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});
