 
function currentDiv(n) {
    showDivs(slideIndex = n);
    showInfo(slideIndex =n);
  }
  /* slide image*/
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }
  /*show info*/
  function showInfo(n){
    var i;
    var x = document.getElementsByClassName("info");
    var dotsss = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dotsss.length; i++) {
      dotsss[i].className = dotsss[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dotsss[slideIndex-1].className += " w3-opacity-off";
  }
  window.onscroll =function(){
    console.info(document.documentElement.scrollTop);
    //var header =document.getElementById("myHeader");
    var lentop=document.getElementById("lentop");
    if(document.documentElement.scrollTop >200 || document.body.scrollTop > 200){
            //header.style.display="none"; 
            lentop.style.display ="block";
             
    } else {
        //header.style.display = "block";
        lentop.style.display ="none";        
    }
     
}
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++)
        images[i].addEventListener("click", function() {
            showImage(this);
        });
}
/*nut dau trang*/ 
function lentop() {
    var timer = setInterval(function() {
        document.documentElement.scrollTop-=10;

        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    }, 3);
}
/*show image*/ 
function showImage(img) {
    var im = document.getElementById("imgModalid");
    im.src = img.src;
    $('#myImageModal').modal();
}