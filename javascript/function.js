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
  
document.querySelector(".dropdown a").addEventListener("click", function() {
  const faDown = this.querySelector(".fa-hand-o-down");
  const faRight = this.querySelector(".fa-hand-o-right");
  faDown.classList.toggle("show");
  faRight.classList.toggle("hide");
});
