// NGÀY GIỜ
  function updateTime() {
const date = new Date();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
document.getElementById("year") = year +  "&copyVERISBABY "+" | " + time;  }
  
  setInterval(updateTime, 60000); // update the time every minute

// DROPDOWN
  function headerNavFunction() {
    var x = document.getElementsByClassName("header-nav-list")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  var navItem = document.getElementsByClassName("nav-item")[0];
  navItem.addEventListener("click", function() {
    var plusMinus = this.getElementsByClassName("plus-minus")[0];
    if (plusMinus.classList.contains("fa-plus")) {
      plusMinus.classList.remove("fa-plus");
      plusMinus.classList.add("fa-minus");
    } else {
      plusMinus.classList.remove("fa-minus");
      plusMinus.classList.add("fa-plus");
    }
  });
  
  var dropdown = document.getElementsByClassName("dropdown")[0];
  dropdown.addEventListener("click", function() {
    var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
    var plusMinus = this.getElementsByClassName("plus-minus")[0];
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      plusMinus.classList.remove("fa-minus");
      plusMinus.classList.add("fa-plus");
    } else {
      dropdownContent.style.display = "block";
      plusMinus.classList.remove("fa-plus");
      plusMinus.classList.add("fa-minus");
    }
  });
