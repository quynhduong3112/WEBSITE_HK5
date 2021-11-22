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
  });
});
