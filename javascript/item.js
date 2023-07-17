$(function() {
    $("#dialog").dialog({
      autoOpen: false,
      width: 800,
height: 710
    });

    $("#item1").on("click", function() {
      $("#dialog").dialog("open");
    });
  });

  $(function() {
    $("#dialog2").dialog({
      autoOpen: false,
      width: 800,
height: 700
    });

    $("#item2").on("click", function() {
      $("#dialog2").dialog("open");
    });
  });

  $(function() {
    $("#dialog3").dialog({
      autoOpen: false,
      width: 800,
height: 700
    });

    $("#item3").on("click", function() {
      $("#dialog3").dialog("open");
    });
  });
// 
  $(function() {
    $("#dialog4").dialog({
      autoOpen: false,
      width: 800,
height: 690
    });

    $("#item4").on("click", function() {
      $("#dialog4").dialog("open");
    });
  });
// 
  $(function() {
    $("#dialog5").dialog({
      autoOpen: false,
      width: 800,
height: 690
    });

    $("#item5").on("click", function() {
      $("#dialog5").dialog("open");
    });
  });
  // ###### DIALOG Image slider
      const images = [
      "https://static.wixstatic.com/media/12abaf_48a2883b6ef746e788dc5ad11954a4e9~mv2.jpg",
      "https://static.wixstatic.com/media/12abaf_0bf4aa77e00145989821f7a350d107fc~mv2.jpg"
    ];
    var currentImg = 0;
    var imgDuration = 3000; // duration in milliseconds
    setInterval(function() {
      currentImg = (currentImg + 1) % images.length;
      $("#img-slider").attr("src", images[currentImg]);
    }, imgDuration);

  // ##### SIZE 
$(function() {
    $("#size-guide-table").dialog({
      autoOpen: false,
      width: 380,
height: 220
    });

    $("#size-guide-link").on("click", function() {
      $("#size-guide-table").dialog("open");
    });
  })
  // $
  const images2 = [
    "https://static.wixstatic.com/media/12abaf_ec268ca554074842bbb85952eceebae6~mv2.jpg",
    "https://static.wixstatic.com/media/12abaf_962c426b1001493a99e229615f356245~mv2.jpg"
  ];
  var currentImg = 0;
  var imgDuration = 3000; // duration in milliseconds
  setInterval(function() {
    currentImg = (currentImg + 1) % images2.length;
    $("#img-slider2").attr("src", images2[currentImg]);
  }, imgDuration);
// ##### SIZE 
$(function() {
  $("#size-guide-table2").dialog({
    autoOpen: false,
    width: 380,
height: 220
  });

  $("#size-guide-link2").on("click", function() {
    $("#size-guide-table2").dialog("open");
  });
})
// $
const images3 = [
  "https://static.wixstatic.com/media/12abaf_085eb7b12db348129b63c30ee2dba828~mv2.jpg",
  "https://static.wixstatic.com/media/12abaf_d6ab1b9474ca459696f6ac5b6b68d3c8~mv2.jpg",
  "https://static.wixstatic.com/media/12abaf_5d0e9fbc29c54962b70bfa9ce865c235~mv2.jpg"
];
var currentImg = 0;
var imgDuration = 3000; // duration in milliseconds
setInterval(function() {
  currentImg = (currentImg + 1) % images3.length;
  $("#img-slider3").attr("src", images3[currentImg]);
}, imgDuration);

// ##### SIZE 
$(function() {
$("#size-guide-table3").dialog({
  autoOpen: false,
  width: 380,
height: 220
});

$("#size-guide-link3").on("click", function() {
  $("#size-guide-table3").dialog("open");
});
})
// $
  const images4 = [
    "https://static.wixstatic.com/media/12abaf_e88a232d8e274e5bb7f45bab65a84333~mv2.jpg",
    "https://static.wixstatic.com/media/12abaf_f6eafef928b647a291c49db3eb40c880~mv2.jpg"
  ];
  var currentImgg = 0;
  var imgDuration = 3000; // duration in milliseconds
  setInterval(function() {
    currentImgg = (currentImgg + 1) % images4.length;
    $("#img-slider4").attr("src", images4[currentImgg]);
  }, imgDuration);
// ##### SIZE 
$(function() {
  $("#size-guide-table4").dialog({
    autoOpen: false,
    width: 410,
height: 240
  });

  $("#size-guide-link4").on("click", function() {
    $("#size-guide-table4").dialog("open");
  });
})
// $
const images5 = [
    "https://static.wixstatic.com/media/12abaf_1a045b59427f426c99546e42af18381d~mv2.jpg",
    "https://static.wixstatic.com/media/12abaf_64a8c7707ace4564ab91faa31c268399~mv2.jpg",
    "https://static.wixstatic.com/media/12abaf_beeb6b38e8934afba267f56a4db78b7a~mv2.jpg"
];
var currentImg = 0;
var imgDuration = 3000; // duration in milliseconds
setInterval(function() {
  currentImg = (currentImg + 1) % images5.length;
  $("#img-slider3").attr("src", images5[currentImg]);
}, imgDuration);

// ##### SIZE 
$(function() {
$("#size-guide-table5").dialog({
  autoOpen: false,
  width: 380,
height: 220
});

$("#size-guide-link5").on("click", function() {
  $("#size-guide-table5").dialog("open");
});
})
