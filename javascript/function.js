// NGÀY GIỜ
   document.getElementById("year").innerHTML = new Date().getFullYear() + "&copyVERISBABY ";

  

// DROPDOWN
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownContent = document.getElementById("dropdown-content");
const icon = document.getElementById("icon");

dropdownToggle.addEventListener("click", function() {
  if (dropdownContent.style.display === "show") {
    dropdownContent.style.display = "none";
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  } else {
    dropdownContent.style.display = "block";
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  }
});

