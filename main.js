// loading screen

window.addEventListener('load', () => {
    let loadScreen = document.getElementById('loading');
    document.body.removeChild(loadScreen);
});

// picture scroll

let i = 0;
let images = [];
let imageTitles = [];
let time = 4000;

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






let linkWrap = document.querySelector('.linkWrap');
let lA =  document.getElementById("leftAside");
let rA = document.getElementById("rightAside");
let cov = document.getElementById("cover");
let main = document.getElementById("main");
let mainLinks = document.getElementById("mainLWrap");
let coat = document.getElementById('coat');
let busi = document.getElementById('business');
let btn = document.querySelectorAll('.btn');

let btnArr = Array.from(btn);




btnArr.forEach((e) => {
    e.addEventListener('click', () => {
        if(e === btnArr[0]){
            mainPage();
            coats();
            setTimeout(cBoxAppear, 2000)
        }
        if(e === btnArr[1]){
            mainPage();
            business();
            setTimeout(cBoxAppear, 2000)
        }
        
    })
})




 let cBox = document.querySelectorAll('.clothesBox');
 let cBoxArr = Array.from(cBox);

 function cBoxAppear(){
     cBoxArr.forEach((e) => {
        e.style.transform = 'scale(1)';
        e.style.opacity = '1';
        
     })
 }
 function cBoxDisappear(){
    cBoxArr.forEach((e) => {
       e.style.transform = 'scale(0.9)';
       e.style.opacity = '0';
    })
}

let titleWrap = document.querySelector('.titleWrap');
let infoWrap = document.querySelector('.infoWrap');
let cWrap = document.querySelectorAll('.clothesWrap');
let cWrapArr = Array.from(cWrap);


 

 function titleInfo(){
     titleWrap.style.opacity = '1';
     titleWrap.style.top = '40px';
     infoWrap.style.opacity = '1';
     infoWrap.style.top = '850px';
 }
 function titleInfoClose(){
    titleWrap.style.opacity = '0';
    titleWrap.style.top = '0';
    infoWrap.style.opacity = '0';
    infoWrap.style.top = '870px';
    setTimeout(removeAllTitle, 1000);
}

let btn2 = document.querySelectorAll('.btn2');
let btnArr2 = Array.from(btn2);

 btnArr2.forEach((e)=>{
     e.addEventListener('click', ()=>{
         if(e === btnArr2[1]){
            mainClose();
            coats();
            setTimeout(cBoxAppear, 2000);
            
         }
         if(e === btnArr2[2]){
            mainClose();
            business();
            setTimeout(cBoxAppear, 2000);
            
         }
     })
 })

 let mainTitles = document.querySelectorAll('.titleWrap h2');
 let mainTitlesArr = Array.from(mainTitles);
 function removeAllTitle(){//do the same with the info box p elements
    for(let i = 0; i < mainTitlesArr.length; i++){
        mainTitlesArr[i].style.display = 'none';
    }
}
 let info = document.querySelectorAll('.infoBox p');//needs fixing
 let infoBox = Array.from(info);

 console.log(infoBox[0])

 function coats(){
    coat.style.display = 'block';
    setTimeout(titleInfo, 2300);
    mainTitlesArr[0].style.display = 'inline';
}
 function business(){
    busi.style.display = 'block';
    setTimeout(titleInfo, 2300);
    mainTitlesArr[1].style.display = 'inline';
}


  function mainPage() {
      asideOut();
      setTimeout(coverUp, 600);
      setTimeout(linksOut, 1300);
     
  };
  function mainClose(){
    titleInfoClose();
    setTimeout(cBoxDisappear, 600);
    setTimeout(removeAllClothesWrap, 1000);

  }
  function removeAllClothesWrap(){
    cWrapArr.forEach((e) => {
        e.style.display = 'none';
    });
  }

  
  function asideOut(){
      lA.style.left = "-300px";
      rA.style.right = "-300px";
  }
  function asideIn(){
    lA.style.left = "0";
    rA.style.right = "0";
}

  //cover
  function coverUp(){
    cov.style.top = "-130vh";
  }
  function coverDown(){
    cov.style.top = "0";
  }
  //links
  function linksOut(){
    mainLinks.style.paddingLeft = "100px";
    mainLinks.style.opacity = "1";
  }
  function linksIn(){
    mainLinks.style.paddingLeft = "0";
    mainLinks.style.opacity = "0";
  }
  
function home(){
    linksIn();
    mainClose();
    setTimeout(coverDown, 1200);
    setTimeout(asideIn, 2000);
}




