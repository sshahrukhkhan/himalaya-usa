var slide = document.getElementById("bestid");
var slides = document.querySelectorAll(".imageSlide")
console.log(slides)

var nextBtn = document.getElementById("rightArrow");
var prevBtn = document.getElementById("leftArrow");

nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

let counter = 1;

function showNextImage() {
    slide.scrollLeft = "250px";
}

function showPrevImage() {
    slide.scroll = "-250px 0";
}


function wrapped_bag_hide() {
    console.log(this.id);
    var hovered = this.id;
    var para = document.getElementById(`price${hovered}`);
    temp = para.textContent;
    para.style.display = "block";
    para.textContent = "ADD TO CART";
    para.setAttribute("class", "zindex");
}

function wrapped_bag_show() {
    console.log(this.id);
    var hovered = this.id;
    var para = document.getElementById(`price${hovered}`);
    var para = document.getElementById(`price${hovered}`);
    para.textContent = temp;
    para.setAttribute("class", "price");
    para.style.display = "block";
}

for (var i = 0; i < wrapped_bag.length; i++) {
    wrapped_bag[i].addEventListener("mouseover", wrapped_bag_hide);
}

for (var i = 0; i < wrapped_bag.length; i++) {
    wrapped_bag[i].addEventListener("mouseout", wrapped_bag_show);
}