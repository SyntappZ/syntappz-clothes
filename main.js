// loading screen

window.addEventListener('load', () => {
    let loadScreen = document.getElementById('loading');
    document.body.removeChild(loadScreen);
});

// picture scroll

let i = 0;
let images = [];
let time = 4000;






images[0] = '/img/slider/multi.jpg';
images[1] = '/img/slider/casual.jpg';
images[2] = '/img/slider/business.jpg';
images[3] = '/img/slider/sportswear.jpg';
images[4] = '/img/slider/dress.jpg';


let = titles = document.getElementsByClassName('tit');




console.log(titles[3])

function changeImg(){
   
   document.slide.src = images[i];
   
   

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
   
    if(images[i] === images[1]){
        titles[0].style.display = 'block';
        titles[4].style.display = 'none';
    }
    if(images[i] === images[2]){
        titles[1].style.display = 'block';
        titles[0].style.display = 'none';
    }
    if(images[i] === images[3]){
        titles[2].style.display = 'block';
        titles[1].style.display = 'none';
    }
    if(images[i] === images[4]){
        titles[3].style.display = 'block';
        titles[2].style.display = 'none';
    }
    if(images[i] === images[0]){
        titles[4].style.display = 'block';
        titles[3].style.display = 'none';
    }



    
    setTimeout('changeImg()', time);
    
}
window.onload = changeImg;







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
let info = document.getElementsByClassName('info');


let asideOut = '-300px';
let asideIn = '0';
let timeFirst = 400;
let timeSecond = 1000;
let timeThird = 1600;
let timeFourth = 2000;

//coats
let coatsInfo = [];
coatsInfo[0] = "Black Midi Belted Padded Coat - £250.";
coatsInfo[1] = "Men's Dark Navy Alpaca-Wool Blend Overcoat - £125.";
coatsInfo[2] = "Roxi Large Pocket Belted Coat - £270.";

//business
let busiInfo = [];
busiInfo[0] = "Women's Navy One-Button Wool Suit - £400.";
busiInfo[1] = "Men's Slim-Fit Light Navy Wool - £375.";
busiInfo[2] = "Men's Black Double-Breasted Wool Blazer - £275.";

//casual
let casInfo = [];
casInfo[0] = "Etoni Stud Detail Knitted Jumper - £75.";
casInfo[1] = "Hailey V-Neck Blouse - £55.";
casInfo[2] = "Men's Navy Wool Sweater With Coloured Stripes - £80.";

//sports
let sportsInfo = [];
sportsInfo[0] = "Activewear Hoodie Viking Sweater Crophood - £90.";
sportsInfo[1] = "training jacket - £45.";
sportsInfo[2] = "grey gym king tracksuit mens - £75";

//dresses
let dressInfo = [];
dressInfo[0] = "Women's Charlie Ruffle Bodice Gown Dress - £210.";
dressInfo[1] = "Womens Sleevless Multicolour Mini Dress - £120.";
dressInfo[2] = "Junior Short Sleeve Lace Dress - £80.";



function infoChooser(info1, info2, info3){
    info[0].innerHTML = info1;
    info[1].innerHTML = info2;
    info[2].innerHTML = info3;
}



   for(let j = 0; j < btn.length; j++){
    btn[j].addEventListener('click', () => {
        
        asides(asideOut);
       setTimeout(imgCover, timeFirst);
       setTimeout(mainLinks, timeSecond);
       setTimeout(clothesBoxApearence.bind(null, '1', 'scale(1)'), timeThird);
       setTimeout(titleAndInfo, timeFourth);
       if(btn[j] === btn[1]){
        businessBtn()
        chooseHeader('business');
        infoChooser(busiInfo[0],busiInfo[1],busiInfo[2]);
       }
       if(btn[j] === btn[2]){
        casualBtn()
        chooseHeader('casual');
        infoChooser(casInfo[0],casInfo[1],casInfo[2]);
       }
       if(btn[j] === btn[3]){
        sportsBtn();
        chooseHeader('sports');
        infoChooser(sportsInfo[0],sportsInfo[1],sportsInfo[2]);
       }
       if(btn[j] === btn[4]){
        dressesBtn()
        chooseHeader('dresses');
        infoChooser(dressInfo[0],dressInfo[1],dressInfo[2]);
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

let titleWrap = document.getElementById('titleWrap');
let pageTitleName = document.getElementById('pageTitle');
let infoWrap = document.getElementById('infoWrap');


function titleAndInfo(){
    if(infoWrap.style.opacity === '1' &&  titleWrap.style.opacity === '1'){
        titleWrap.style.top = '0';
        titleWrap.style.opacity = '0';
        infoWrap.style.bottom = '30px';
        infoWrap.style.opacity = '0';
    }else{
        titleWrap.style.top = '40px';
        titleWrap.style.opacity = '1';
        infoWrap.style.bottom = '70px';
        infoWrap.style.opacity = '1';
    }
}


function chooseHeader(name){
    pageTitleName.innerHTML = name;
}





function home(){
    titleAndInfo();
    setTimeout(clothesBoxApearence.bind(null, '0', 'scale(0.9)'), timeFirst);
    setTimeout(mainLinks, timeSecond);
    setTimeout(imgCover, timeThird);
    setTimeout(asides.bind(null, asideIn), timeFourth);
}

function imgOnePicker(img1){
    imgOne.src = img1;
}
function imgTwoPicker(img2){
    imgTwo.src = img2;
}
function imgThreePicker(img3){
    imgThree.src = img3;
}


//---buttons----

function coatsBtn(){
    imgOne.src="img/coats/coat1.jpg";
    imgTwo.src="img/coats/coat2.jpg";
    imgThree.src="img/coats/coat3.jpg";
}
 function businessBtn(){
    imgOnePicker(imgBox1[0]);
    imgTwoPicker(imgBox2[0]);
    imgThreePicker(imgBox3[0]);
 }
 function casualBtn(){
    imgOnePicker(imgBox1[1]);
    imgTwoPicker(imgBox2[1]);
    imgThreePicker(imgBox3[1]);
 }
 function sportsBtn(){
    imgOnePicker(imgBox1[2])
    imgTwoPicker(imgBox2[2])
    imgThreePicker(imgBox3[2])
 }
 function dressesBtn(){
    imgOnePicker(imgBox1[3])
    imgTwoPicker(imgBox2[3])
    imgThreePicker(imgBox3[3])
 }



let btn2 = document.getElementsByClassName('btn2');
for(let a = 0; a < btn2.length; a++){
    btn2[a].addEventListener('click', () => {
        if(btn2[a] != btn2[0]){
            titleAndInfo()
            setTimeout(clothesBoxApearence.bind(null, '0', 'scale(0.9)'), timeFirst);
            setTimeout(clothesBoxApearence.bind(null, '1', 'scale(1)'), timeThird);
            setTimeout(titleAndInfo, timeFourth);
            if(btn2[a] === btn2[1]){
               setTimeout(coatsBtn, timeSecond);
               setTimeout(chooseHeader.bind(null, 'coats'), timeSecond);
               setTimeout(infoChooser.bind(null, coatsInfo[0],coatsInfo[1],coatsInfo[2]), timeSecond);
            }
            if(btn2[a] === btn2[2]){
                setTimeout(businessBtn, timeSecond);
                setTimeout(chooseHeader.bind(null, 'business'), timeSecond);
                setTimeout(infoChooser.bind(null, busiInfo[0],busiInfo[1],busiInfo[2]), timeSecond);
            }
            if(btn2[a] === btn2[3]){
                setTimeout(casualBtn, timeSecond);
                setTimeout(chooseHeader.bind(null, 'casual'), timeSecond);
                setTimeout(infoChooser.bind(null, casInfo[0],casInfo[1],casInfo[2]), timeSecond);
            }
            if(btn2[a] === btn2[4]){
                setTimeout(sportsBtn, timeSecond);
                setTimeout(chooseHeader.bind(null, 'sports'), timeSecond);
                setTimeout(infoChooser.bind(null, sportsInfo[0],sportsInfo[1],sportsInfo[2]), timeSecond);
            }
            if(btn2[a] === btn2[5]){
                setTimeout(dressesBtn, timeSecond);
                setTimeout(chooseHeader.bind(null, 'dresses'), timeSecond);
                setTimeout(infoChooser.bind(null, dressInfo[0],dressInfo[1],dressInfo[2]), timeSecond);
            }
        }
    })
}


