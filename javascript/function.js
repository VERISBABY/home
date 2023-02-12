// NGÀY GIỜ
   document.getElementById("year").innerHTML = new Date().getFullYear() + "&copyVERISBABY ";

  

// DROPDOWN
function headerNavFunction() {
     const headerNav2 = document.getElementsByClassName("header-nav-list")[0];
     headerNav2.classList.toggle("show");

}

function headerNavFunction() {
  const headerNavDropdown = document.getElementsByClassName("dropdown-content")[0];
 
  headerNavDropdown.classList.toggle("show");
  
  const icon = document.getElementById("icon");
  if (headerNavDropdown.classList.contains("show")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}


