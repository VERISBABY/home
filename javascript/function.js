// NGÀY GIỜ
const date = new Date();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
document.getElementById("year").innerHTML = "VERISBABY " + year + " " + time;

// DROPDOWN
function headerNavFunction() {
  var x = document.getElementsByClassName("header-nav-list")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var dropdown = document.getElementsByClassName("dropdown")[0];
dropdown.addEventListener("click", function() {
  var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
  var plusMinus = this.getElementsByClassName("plus-minus")[0];
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    plusMinus.innerHTML = "+";
  } else {
    dropdownContent.style.display = "block";
    plusMinus.innerHTML = "-";
  }
});
