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








let main = document.getElementById("main");


let btn2 = document.getElementsByClassName('.btn2');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let imgBox1 = [];
imgBox1[0] = "img/business/busi1.jpg";
imgBox1[1] = "img/casual/cas1.jpg";
imgBox1[2] = "img/sports/sports1.jpg";
imgBox1[3] = "img/dresses/dress1.jpg";



let imgBox2 = [];
imgBox2[0] = "img/business/busi2.jpg";
imgBox2[1] = "img/casual/cas2.jpg";
imgBox2[2] = "img/sports/sports2.jpg";
imgBox2[3] = "img/dresses/dress2.jpg";



let imgBox3 = [];
imgBox3[0] = "img/business/busi3.jpg";
imgBox3[1] = "img/casual/cas3.jpg";
imgBox3[2] = "img/sports/sports3.jpg";
imgBox3[3] = "img/dresses/dress3.jpg";

let leftAside =  document.getElementById("leftAside");
let rightAside = document.getElementById("rightAside");
let cover = document.getElementById("cover");
let btn = document.getElementsByClassName('btn');



let asideOut = '-300px';
let asideIn = '0';
let timeFirst = 400;
let timeSecond = 1000;
let timeThird = 1600;
let timeForth = 2300;


   for(let j = 0; j < btn.length; j++){
    btn[j].addEventListener('click', () => {
        asides(asideOut);
       setTimeout(imgCover, timeFirst);
       setTimeout(mainLinks, timeSecond);
       setTimeout(clothesBoxApearence.bind(null, '1', 'scale(1)'), timeThird);
       if(btn[j] === btn[1]){
        imgOnePicker(imgBox1[0])
        imgTwoPicker(imgBox2[0])
        imgThreePicker(imgBox3[0])
       }
       if(btn[j] === btn[2]){
        imgOnePicker(imgBox1[1])
        imgTwoPicker(imgBox2[1])
        imgThreePicker(imgBox3[1])
       }
       if(btn[j] === btn[3]){
        imgOnePicker(imgBox1[2])
        imgTwoPicker(imgBox2[2])
        imgThreePicker(imgBox3[2])
       }
       if(btn[j] === btn[4]){
        imgOnePicker(imgBox1[3])
        imgTwoPicker(imgBox2[3])
        imgThreePicker(imgBox3[3])
       }
    })
   }



function clothesBoxApearence(op, scale){
    let clothesBox = document.getElementsByClassName('clothesBox');
    for(let x = 0; x < clothesBox.length; x++){
        clothesBox[x].style.opacity = op;
        clothesBox[x].style.transform = scale;
    }
        
}

function asides(aside){
    this.aside = aside;
    leftAside.style.left = aside;
    rightAside.style.right = aside;
}


function imgCover(){
    if(cover.style.top === '-140vh'){
        cover.style.top = '0';
    }else{
        cover.style.top = '-140vh';
    }
}



function mainLinks(){
let mLinks = document.getElementById("mainLWrap");
if(mLinks.style.opacity === '1'){
    mLinks.style.opacity = '0';
    mLinks.style.paddingLeft = '0';
}else{
    mLinks.style.opacity = '1';
    mLinks.style.paddingLeft = '100px';
}
    
}
function home(){
    clothesBoxApearence('0', 'scale(0.9)')
    setTimeout(mainLinks, timeFirst);
    setTimeout(imgCover, timeSecond);
    setTimeout(asides.bind(null, asideIn), timeThird);
   
}

function imgOnePicker(img1){
    this.img1 = img1;
    imgOne.src = img1;
}
function imgTwoPicker(img2){
    this.img2 = img2;
    imgTwo.src = img2;
}
function imgThreePicker(img3){
    this.img3 = img3;
    imgThree.src = img3;
}