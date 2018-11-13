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



//animations

// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById('btn4');
// let btn5 = document.getElementById('btn5');
// let btn6 = document.getElementById('btn6');




let linkWrap = document.querySelector('.linkWrap');
let lA =  document.getElementById("leftAside");
let rA = document.getElementById("rightAside");
let cov = document.getElementById("cover");
let main = document.getElementById("main");

  function getJackets(){
      runPageAnim();
  }


  function runPageAnim() {
      asideSlide();
      setTimeout(coverUp, 1300);
     
      
  };
  
  function asideSlide(){
      lA.style.left = "-300px";
      rA.style.right = "-300px";
      cov.style.top = "-130vh";
  }
  function coverUp(){
      
      lorum.style.paddingTop = "30px";
      lorum.style.opacity = "1";
  
  }





