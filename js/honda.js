window.onscroll =function(){
    console.info(document.documentElement.scrollTop);
    var header =document.getElementById("myHeader");
    var logo=document.getElementById("logo");
    var lentop=document.getElementById("lentop");
    if(document.documentElement.scrollTop >200 || document.body.scrollTop > 200){
            /*logo.style.display="flex";*/ 
            header.style.position = "fixed";
            header.style.left= 0;
            header.style.right= 0;
            header.style.backgroundColor = "rgb(255, 255, 255, 0.9)";
            header.style.zIndex = 9;  
            lentop.style.display ="block";
             
    } else {
        header.style.position = "relative";
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
function lentop() {
    var timer = setInterval(function() {
        document.documentElement.scrollTop-=10;

        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    }, 3);
}
function showImage(img) {
    var im = document.getElementById("imgModalid");
    im.src = img.src;
    $('#myImageModal').modal();
}
/*go page*/

function incNumber(interval=200) {
    var timer = setInterval(function() {
        var objs = document.querySelectorAll(".stats span")
        for (var i = 0; i < objs.length; i++) {
            var max = parseInt(objs[i].getAttribute("rel"));
            var step = parseInt(objs[i].getAttribute("step"));
            var n = parseInt(objs[i].innerText);
            n += step;

            if (n > max) {
                n = max;
            }

            objs[i].innerText = n;
        }
    }, interval);
}

function common(sTop=0, duration=4000) {
    $("html, body").animate({
        scrollTop: sTop
    }, duration);
}

function goToTop() {
    common();
}

function go(obj) {
    event.preventDefault();
    var pos = document.querySelector(obj.getAttribute("href"));

    common(pos.offsetTop);
}
