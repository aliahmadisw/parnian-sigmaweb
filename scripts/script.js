// شروع jquery

$(document).ready(function () {
  /*نوار اعلان*/
  $(".sigmaweb-notif-close").click(function () {
    $(".parnian-notif").fadeOut();
  });

  // اسلایدر پست ها صفحه اصلی
  $(".parnian-home-tab-btn-news").click(function () {
    $(".parnian-home-tab-btn-news").attr("aria-selected", "true");
    $(".parnian-home-tab-btn-articles").attr("aria-selected", "false");
    $(".parnian-home-slider-news").addClass("active");
    $(".parnian-home-slider-articles").removeClass("active");
  });
  $(".parnian-home-tab-btn-articles").click(function () {
    $(".parnian-home-tab-btn-articles").attr("aria-selected", "true");
    $(".parnian-home-tab-btn-news").attr("aria-selected", "false");
    $(".parnian-home-slider-articles").addClass("active");
    $(".parnian-home-slider-news").removeClass("active");
  });

  // سرچ تبلت - موبایل
  $(".fa-search-btn").click(function () {
    $(".section-search-mobile").addClass("active");
  });

  $(".sigmaweb-search-mobile-close").click(function () {
    $(".section-search-mobile").removeClass("active");
  });

  // منو موبایل - تبلت
  $(".header-menu-tel-btn").click(function () {
    $(".header-mobile").addClass("active");
  });

  $(".sigmaweb-menu-tel-close").click(function () {
    $(".header-mobile").removeClass("active");
  });

  $(".submenu-mobile").click(function () {
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
  });

  $(".submenu-mobile ul").click(function (event) {
    event.stopPropagation();
  });
});

// پایان jquery

// swiper
/*اسلایدر بیمه ها*/
var swiper = new Swiper(".parnian-insurances-slide", {
  loop: true,
  speed: 500,
  pagination: {
    el: ".pagination-home-insurances-swiper",
    clickable: true,
  },
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 5,
      slidesPerView: 1,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    pauseOnInteraction: false,
  },
});

// پست ها
// اخبار
var swiper2 = new Swiper(".parnian-home-swiper-news-card", {
  loop: true,
  speed: 500,
  pagination: {
    el: ".pagination-home-posts-swiper-news",
    clickable: true,
  },
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 5,
      slidesPerView: 1,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    pauseOnInteraction: false,
  },
});

// مقالات
var swiper3 = new Swiper(".parnian-home-swiper-articles-card", {
  loop: true,
  speed: 500,
  pagination: {
    el: ".pagination-home-posts-swiper-articles",
    clickable: true,
  },
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 5,
      slidesPerView: 1,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    pauseOnInteraction: false,
  },
});

// برندها
var swiper4 = new Swiper(".parnian-swiper-brands", {
  loop: true,
  speed: 5000,
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 5,
      slidesPerView: 2,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 35,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
// swiper
