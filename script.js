 // JavaScript for smooth scrolling and padding adjustment
    // window.addEventListener('DOMContentLoaded', () => {
    //   const navLinks = document.querySelectorAll('head a');
    //   const contentSections = document.querySelectorAll('.content-section');
    //   const scrollThreshold = 100; // Scroll threshold in pixels
    //   let scrollOffset = 0;

    //   for (const link of navLinks) {
    //     link.addEventListener('click', clickHandler);
    //   }

    //   window.addEventListener('scroll', adjustPadding);

    //   function clickHandler(e) {
    //     e.preventDefault();
    //     const target = document.querySelector(e.target.hash);
    //     target.scrollIntoView({ behavior: 'smooth' });
    //   }

    //   function adjustPadding() {
    //     scrollOffset = window.pageYOffset;

    //     for (const section of contentSections) {
    //       const sectionOffsetTop = section.offsetTop;
    //       const paddingTop = Math.max(0, scrollOffset - sectionOffsetTop + scrollThreshold);
    //       section.style.paddingTop = `${paddingTop}px`;
    //     }
    //   }
    // });
 
 
 // JavaScript for smooth scrolling
//  window.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelectorAll('head a');

//   for (const link of navLinks) {
//     link.addEventListener('click', clickHandler);
//   }

//   function clickHandler(e) {
//     e.preventDefault();
//     const target = document.querySelector(e.target.hash);
//     target.scrollIntoView({ behavior: 'smooth' });
//   }
// });



// ========= to stick navbar in top of the page while scrolling ============

window.addEventListener('scroll', function() {
  var navigation = document.querySelector('.navigation');
  var navigationOffsetTop = navigation.offsetTop;
  
  if (window.pageYOffset > navigationOffsetTop) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky');
  }
});



// ============== to display current date ==================

document.addEventListener('DOMContentLoaded', function() {
  var dateElement = document.getElementById('today_date');
  var currentDate = new Date();
  dateElement.innerHTML = currentDate.toDateString();
});



// ============= to display real time =======================

$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 })


 function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();



// ======= swiper slider ===============

// var swiper = new Swiper(".mySwiper", {
//   direction: "vertical",
//   slidesPerView: 1,
//   spaceBetween: 30,
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




