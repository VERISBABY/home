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
var textWrapper = document.querySelector('h1.ml3');
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
// NÚT 2
// Wrap every letter in a span
var textWrappertwo = document.querySelector('h3.ml7 .letters');
textWrappertwo.innerHTML = textWrappertwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapperTimeline = anime.timeline({loop: true})
  .add({
    targets: textWrappertwo.querySelectorAll('.letter'),
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: textWrappertwo,
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
// NỀN SAO
// Twinkling Night Sky by Sharna

// class StarrySky extends React.Component {
//   state = {
//     num: 60,
//     vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
//     vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
//   };
//   starryNight = () => {
//     anime({
//       targets: ["#sky .star"],
//       opacity: [
//         {
//           duration: 700,
//           value: "0"
//         },
//         {
//           duration: 700,
//           value: "1"
//         }
//       ],
//       easing: "linear",
//       loop: true,
//       delay: (el, i) => 50 * i
//     });
//   };
//   shootingStars = () => {
//     anime({
//       targets: ["#shootingstars .wish"],
//       easing: "linear",
//       loop: true,
//       delay: (el, i) => 1000 * i,
//       opacity: [
//         {
//           duration: 700,
//           value: "1"
//         }
//       ],
//       width: [
//         {
//           value: "150px"
//         },
//         {
//           value: "0px"
//         }
//       ],
//       translateX: 350
//     });
//   };
//   randomRadius = () => {
//     return Math.random() * 0.7 + 0.6;
//   };
//   getRandomX = () => {
//     return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
//   };
//   getRandomY = () => {
//     return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
//   };
//   componentDidMount() {
//     this.starryNight();
//     this.shootingStars();
//   }
//   render() {
//     const { num } = this.state;
//     return (
//       <div id="App">
//         <svg id="sky">
//           {[...Array(num)].map((x, y) => (
//             <circle
//               cx={this.getRandomX()}
//               cy={this.getRandomY()}
//               r={this.randomRadius()}
//               stroke="none"
//               strokeWidth="0"
//               fill="orange"
//               key={y}
//               className="star"
//             />
//           ))}
//         </svg>
//         <div id="shootingstars">
//           {[...Array(60)].map((x, y) => (
//             <div
//               key={y}
//               className="wish"
//               style={{
//                 left: `${this.getRandomY()}px`,
//                 top: `${this.getRandomX()}px`
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<StarrySky />, document.querySelector(".about"));
