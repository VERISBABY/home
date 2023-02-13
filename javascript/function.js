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
var textWrapper = document.querySelector('.ml3');
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
  var productGallery = document.getElementById("product-gallery");

  fetch("./products.json")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        var productCard = document.createElement("div");
        productCard.classList.add("product-card");
  
        var defaultImg = document.createElement("img");
        defaultImg.classList.add("default-img");
        defaultImg.src = product.defaultImg;
        defaultImg.alt = product.name + " Default";
  
         hoverImg.src = product.hoverImg;
        hoverImg.alt = product.name + " Hover";
  
        var productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = product.name;
  
        var productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price;
  
        productCard.appendChild(defaultImg);
        productCard.appendChild(hoverImg);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
  
        productGallery.appendChild(productCard);
      });
    });    var hoverImg = document.createElement("img");
        hoverImg.classList.add("hover-img");
        
  //  
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

  
  


