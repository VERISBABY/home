// NGÀY GIỜ
   document.getElementById("year").innerHTML = new Date().getFullYear() + "&copyVERISBABY ";

  

// DROPDOWN
function headerNavFunction() {
  var x = document.getElementsByClassName("header-nav-list")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// 
// Wrap every letter in a span
var textWrapper = document.getElementsByClassName('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // LẶP SẢN PHẨM CARD

  //  
// Nút BACK TO TOP
  var backToTopBtn = document.getElementById("back-to-top-btn");
backToTopBtn.style.display = "none";

window.onscroll = function() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

