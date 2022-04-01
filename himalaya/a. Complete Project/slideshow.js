var counter = 1;

slideshow(counter);

function currentSlide(n) {
    slideshow(counter = n);
}

function slideshow(n) {
    var images = document.getElementsByClassName("slide");
    var bars = document.getElementsByClassName("bars");

    if (n > images.length) {
        counter = 1
    }  

    if (n < 1) {counter = images.length}
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" change", "");
    }
    images[counter-1].style.display = "block";  
    bars[counter-1].className += " change";
}