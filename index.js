function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

  $(".searchButton").on("click", function(){
    $(".searchButton").toggleClass("active");
    if ($(".searchButton").hasClass("active")) {
      $(".searchBar").css("height", "100vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
  });

  // Use jQuery to target the <h1> tag and make it red.
$("h1").css("color", "red");

// Use jQuery to target the blue class and make it blue.
$(".blue").css("color", "blue");
