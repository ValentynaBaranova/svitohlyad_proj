var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  let menuArrows = document.querySelectorAll(".menu__arrow");

  if (menuArrows.length > 0) {
    for (i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

// ПРОКРУТКА ПРИ КЛИКЕ

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// БУРГЕР МЕНЮ

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

//   СПОЙЛЕР

const activeItem = document.querySelector(".spoiler__item");

$(document).ready(function () {
  $(".spoiler__title").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(1300);
    activeItem.classList.toggle("_active");
  });
});

$(document).ready(function () {
  $(".info-bar__title").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

//   СЛАЙДЕР

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "linear",
    infinite: false,
    inicialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  if ($(window).width() < 650) {
    $(".services__slider:not(.slick-initialized)").slick({
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    });
  } else {
    $(".services__slider.slick-initialized").slick("unslick");
  }
});

$(document).ready(function () {
  $(".sale__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    easing: "linear",
    infinite: false,
    inicialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".responses__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: "linear",
    infinite: false,
    inicialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".news__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: "linear",
    infinite: false,
    inicialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
