
var slideIndex,slides,dots;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("mySlides");
    slides[slideIndex].style.opacity=1;

    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    clearInterval(timer);
    timer = setInterval(function(){moveSlide(slideIndex+1)}, 3000);
    moveSlide(slideIndex+n);
}

document.getElementById('dotsContainer').onclick = function(){
    clearInterval(timer);
    timer = setInterval(function(){moveSlide(slideIndex+1)}, 3000);
}


function moveSlide(n){

    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "mySlides";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
    }
}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },3000);
}
setTimer();

