$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,

    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
});

const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchPopup = document.getElementById("searchPopup");

openSearch.onclick = function () {
  searchPopup.classList.add("active");
};

closeSearch.onclick = function () {
  searchPopup.classList.remove("active");
};

searchPopup.onclick = function (e) {
  if (e.target === searchPopup) {
    searchPopup.classList.remove("active");
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    searchPopup.classList.remove("active");
  }
});

/*================ DARK MODE ================*/

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = function () {
  document.body.classList.toggle("dark");

  const icon = themeBtn.querySelector("i");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "dark") {
  document.body.classList.add("dark");

  themeBtn.querySelector("i").classList.remove("fa-moon");
  themeBtn.querySelector("i").classList.add("fa-sun");
}
