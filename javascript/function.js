// NGÀY GIỜ

const date = new Date();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
document.getElementById("year") = year +  "&copyVERISBABY "+" | " + time;  
  

// DROPDOWN
  function headerNavFunction() {
    var x = document.getElementsByClassName("header-nav-list")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
const projectsLink = document.querySelector('.header-nav .dropdown a');
const plusMinusIcon = projectsLink.querySelector('.plus-minus');

projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  plusMinusIcon.classList.toggle('fa-plus');
  plusMinusIcon.classList.toggle('fa-minus');
});
