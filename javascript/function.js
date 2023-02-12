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
  
document.querySelector(".dropdown a").addEventListener("click", function() {
  const faDown = this.querySelector(".fa-hand-o-down");
  const faRight = this.querySelector(".fa-hand-o-right");
  faDown.classList.toggle("show");
  faRight.classList.toggle("hide");
});

