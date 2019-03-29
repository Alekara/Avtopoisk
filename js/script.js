var menuToggle = document.querySelector(".navigation__toggle");
var orderInspect = document.querySelector(".order__inspect");
var orderSelect = document.querySelector(".order__select");
var orderExpert = document.querySelector(".order__expert");

var arrowLeft = document.querySelector(".testimonials__navigation--left");
var arrowRight = document.querySelector(".testimonials__navigation--right");
var testimonial = document.querySelectorAll(".testimonials__item");
var currentSlide = 0;
var currentTestimonial = 0;

var readMore = document.querySelector(".testimonials__button");

//КНОПКИ
menuToggle.addEventListener("click", function () {
  document.querySelector(".navigation__list").classList.toggle("navigation__list--hidden");
  document.querySelector(".navigation__logo").classList.toggle("navigation__logo--hidden");
  document.querySelector(".navigation").classList.toggle("navigation--hidden");
  menuToggle.classList.toggle("navigation__toggle--menu-opened");
  document.querySelector(".navigation__icon").classList.toggle("navigation__icon--cross");
});

orderInspect.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup__title--1").style.display = "block";
  document.querySelector(".popup__title--2").style.display = "none";
  document.querySelector(".popup__title--3").style.display = "none";
});

orderSelect.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup__title--1").style.display = "none";
  document.querySelector(".popup__title--2").style.display = "block";
  document.querySelector(".popup__title--3").style.display = "none";
});

orderExpert.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup__title--1").style.display = "none";
  document.querySelector(".popup__title--2").style.display = "none";
  document.querySelector(".popup__title--3").style.display = "block";
});


//СЛАЙДЕР
arrowLeft.addEventListener("click", clickLeftArrow);                         
arrowRight.addEventListener("click", clickRightArrow);

function clickRightArrow() {
  testimonial[currentTestimonial].style.display = "none";
  if (currentTestimonial == testimonial.length - 1) {
    currentTestimonial = 0;
  } else {
    ++currentTestimonial;
  }
  testimonial[currentTestimonial].style.display = "block";  
};

function clickLeftArrow() {
  testimonial[currentTestimonial].style.display = "none";
  if (currentTestimonial == 0) {
    currentTestimonial = testimonial.length - 1;
  } else {
    --currentTestimonial;
  }
  testimonial[currentTestimonial].style.display = "block";
};

readMore.addEventListener("click", showTestimonials);  

function showTestimonials() {
  readMore.style.display = "none";
  testimonial.forEach(function(el) {
    el.style.display = "block";
  })  
};

//ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
document.querySelector(".service__item--11").addEventListener("click", function () {
  document.querySelector(".service__base--inspect1").style.display = "block";
  document.querySelector(".service__item--11").classList.add("service__item--active");
  document.querySelector(".service__base--inspect2").style.display = "none";
  document.querySelector(".service__item--12").classList.remove("service__item--active");
  document.querySelector(".service__base--inspect3").style.display = "none";
  document.querySelector(".service__item--13").classList.remove("service__item--active");

});

document.querySelector(".service__item--12").addEventListener("click", function () {
  document.querySelector(".service__base--inspect1").style.display = "none";
  document.querySelector(".service__item--11").classList.remove("service__item--active");
  document.querySelector(".service__base--inspect2").style.display = "block";
  document.querySelector(".service__item--12").classList.add("service__item--active");
  document.querySelector(".service__base--inspect3").style.display = "none";
  document.querySelector(".service__item--13").classList.remove("service__item--active");
});

document.querySelector(".service__item--13").addEventListener("click", function () {
  document.querySelector(".service__base--inspect1").style.display = "none";
  document.querySelector(".service__base--inspect2").style.display = "none";
  document.querySelector(".service__base--inspect3").style.display = "block";
  document.querySelector(".service__item--11").classList.remove("service__item--active");
  document.querySelector(".service__item--12").classList.remove("service__item--active");
  document.querySelector(".service__item--13").classList.add("service__item--active");
});

document.querySelector(".service__item--21").addEventListener("click", function () {
  document.querySelector(".service__base--select1").style.display = "block";
  document.querySelector(".service__base--select2").style.display = "none";
  document.querySelector(".service__base--select3").style.display = "none";
  document.querySelector(".service__item--21").classList.add("service__item--active");
  document.querySelector(".service__item--22").classList.remove("service__item--active");
  document.querySelector(".service__item--23").classList.remove("service__item--active");
});

document.querySelector(".service__item--22").addEventListener("click", function () {
  document.querySelector(".service__base--select1").style.display = "none";
  document.querySelector(".service__base--select2").style.display = "block";
  document.querySelector(".service__base--select3").style.display = "none";
  document.querySelector(".service__item--21").classList.remove("service__item--active");
  document.querySelector(".service__item--22").classList.add("service__item--active");
  document.querySelector(".service__item--23").classList.remove("service__item--active");
});

document.querySelector(".service__item--23").addEventListener("click", function () {
  document.querySelector(".service__base--select1").style.display = "none";
  document.querySelector(".service__base--select2").style.display = "none";
  document.querySelector(".service__base--select3").style.display = "block";
  document.querySelector(".service__item--21").classList.remove("service__item--active");
  document.querySelector(".service__item--22").classList.remove("service__item--active");
  document.querySelector(".service__item--23").classList.add("service__item--active");
});

document.querySelector(".service__item--31").addEventListener("click", function () {
  document.querySelector(".service__base--expert1").style.display = "block";
  document.querySelector(".service__base--expert2").style.display = "none";
  document.querySelector(".service__base--expert3").style.display = "none";
  document.querySelector(".service__item--31").classList.add("service__item--active");
  document.querySelector(".service__item--32").classList.remove("service__item--active");
  document.querySelector(".service__item--33").classList.remove("service__item--active");
});

document.querySelector(".service__item--32").addEventListener("click", function () {
  document.querySelector(".service__base--expert1").style.display = "none";
  document.querySelector(".service__base--expert2").style.display = "block";
  document.querySelector(".service__base--expert3").style.display = "none";
  document.querySelector(".service__item--31").classList.remove("service__item--active");
  document.querySelector(".service__item--32").classList.add("service__item--active");
  document.querySelector(".service__item--33").classList.remove("service__item--active");
});

document.querySelector(".service__item--33").addEventListener("click", function () {
  document.querySelector(".service__base--expert1").style.display = "none";
  document.querySelector(".service__base--expert2").style.display = "none";
  document.querySelector(".service__base--expert3").style.display = "block";
  document.querySelector(".service__item--31").classList.remove("service__item--active");
  document.querySelector(".service__item--32").classList.remove("service__item--active");
  document.querySelector(".service__item--33").classList.add("service__item--active");
});


//ПОДСВЕТКА КРУЖОЧКОВ
document.querySelector(".importance__item--mask").addEventListener("mouseover", function () {
  document.querySelector(".importance__circle--1").style.background = "#d10000";
});

document.querySelector(".importance__item--mask").addEventListener("mouseout", function () {
  document.querySelector(".importance__circle--1").style.background = "#fff";
}); 

document.querySelector(".importance__item--crush").addEventListener("mouseover", function () {
  document.querySelector(".importance__circle--2").style.background = "#d10000";
});

document.querySelector(".importance__item--crush").addEventListener("mouseout", function () {
  document.querySelector(".importance__circle--2").style.background = "#fff";
}); 

document.querySelector(".importance__item--money").addEventListener("mouseover", function () {
  document.querySelector(".importance__circle--3").style.background = "#d10000";
});

document.querySelector(".importance__item--money").addEventListener("mouseout", function () {
  document.querySelector(".importance__circle--3").style.background = "#fff";
}); 

document.querySelector(".importance__item--tools").addEventListener("mouseover", function () {
  document.querySelector(".importance__circle--4").style.background = "#d10000";
});

document.querySelector(".importance__item--tools").addEventListener("mouseout", function () {
  document.querySelector(".importance__circle--4").style.background = "#fff";
}); 



