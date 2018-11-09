// loading screen

window.addEventListener('load', () => {
    let loadScreen = document.getElementById('loading');
    document.body.removeChild(loadScreen);
});

// picture scroll

let i = 0;
let images = [];
let imageTitles = [];
let time = 5000;

let = title1 = document.getElementById('tit1');
let = title2 = document.getElementById('tit2');
let = title3 = document.getElementById('tit3');
let = title4 = document.getElementById('tit4');
let = title5 = document.getElementById('tit5');

images[0] = '/img/slider/multi.jpg';
images[1] = '/img/slider/casual.jpg';
images[2] = '/img/slider/business.jpg';
images[3] = '/img/slider/sportswear.jpg';
images[4] = '/img/slider/dress.jpg';







function changeImg(){
   imageTitles[i];
   document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    
    if(i === 1){
        title5.style.display = 'none';
        title4.style.display = 'block';
        title1.style.opacity = '1';
        
    }else{
        title1.style.opacity = '0';
    }
    if(i === 2){
        title5.style.display = 'block';
        title1.style.display = 'none';
        title2.style.opacity = '1';
    }else{
        title2.style.opacity = '0';
    }
    if(i === 3){
        title2.style.display = 'none';
        title1.style.display = 'block';
        title3.style.opacity = '1';
    }else{
        title3.style.opacity = '0';
    }
    if(i === 4){
        title3.style.display = 'none';
        title2.style.display = 'block';
        title4.style.opacity = '1';
    }else{
        title4.style.opacity = '0';
    }
    if(i === 0){
        title4.style.display = 'none';
        title3.style.display = 'block';
        title5.style.opacity = '1';
    }else{
        title5.style.opacity = '0';
    }

    
    setTimeout('changeImg()', time);
    
}
window.onload = changeImg;



//smooth scroll

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startingPosition,distance,duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
    requestAnimationFrame(animation);
}


let mens = document.getElementById('mens');
let womens = document.getElementById('womens');
let business = document.getElementById('business');
let sports = document.getElementById('sports');
let shoes = document.getElementById('shoes');
let head = document.getElementById('head');

//mens page
mens.addEventListener('click',(e) =>{
    e.preventDefault();
    smoothScroll('#mensWrap', 1000);
});

//womans page
womens.addEventListener('click',(e) =>{
    e.preventDefault();
    smoothScroll('#womansWrap', 1500);
});
//business page
business.addEventListener('click',(e) =>{
    e.preventDefault();
    smoothScroll('#businessWrap', 1500);
});
//sports page
sports.addEventListener('click',(e) =>{
    e.preventDefault();
    smoothScroll('#sportsWrap', 1500);
});
//shoes page
shoes.addEventListener('click',(e) =>{
    e.preventDefault();
    smoothScroll('#shoesWrap', 1500);
});
//hat page
head.addEventListener('click',(e) =>{
    e.preventDefault();
    smoothScroll('#headWrap', 1500);
});


