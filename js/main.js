// Start Responsive Menu 
window.addEventListener('scroll', function () {
    let topBar = document.querySelector('header .top-bar');
    topBar.classList.toggle('fixed', window.scrollY > 0);
});

let menuOpen = document.querySelector('.menu-icon-open');
let menu = document.querySelector('header .top-bar nav ul');
let overLay = document.querySelector('.overlay');
let menuClose = document.querySelector('.menu-icon-close');
menuOpen.addEventListener('click', openMenu);
function openMenu() {
    menuOpen.style.display = "none";
    menu.classList.add('show-nav');
    overLay.style.display = "block";
    menuClose.style.display = "block";
};
menuClose.addEventListener('click', closeMenu);
function closeMenu() {
    menuClose.style.display = "none";
    overLay.style.display = "none";
    menu.classList.remove('show-nav');
};

let goToTop = document.querySelector('.go-to-top .go-to-top-icon ');
window.addEventListener('scroll',goTop );
function goTop() {
    if (window.pageYOffset >= 500) {
        goToTop.style.display = "flex";
    } else {
        goToTop.style.display = "none";
    }
};
goToTop.addEventListener('click', topGo);
function topGo() {
    window.scrollTo(0,0)
};
// End Responsive Menu
// Start faq-boxs

// Start disease
let diseaseOnee = document.querySelector('.faq .faq-boxs .faq-left-box .disease');
let firstDisease =document.querySelector('.faq .faq-right-box .disease');

diseaseOnee.addEventListener('click', diseaseOne);

function diseaseOne() {
    seconddSpreads.style.display = "none";
    thirdProtects.style.display = "none";
    fourthSymptom.style.display = "none";
    sixthBusters.style.display = "none";
    firstDisease.style.display = "block";
    firstPd.classList.toggle('change-color');
    bodyFirstd.classList.toggle('display-none');
    bodyFirstd.classList.toggle('display-block');
    plusFirstd.classList.toggle('display-none');
    plusFirstd.classList.toggle('display-block');
    miunsFirstd.classList.toggle('display-none');
    miunsFirstd.classList.toggle('display-block');
    titleFirstd.classList.toggle('text-color');
    titleFirstd.classList.toggle('text-color-hover');
}

let firstPd = document.querySelector('.faq .faq-right-box .disease .border-first');
let bodyFirstd = document.querySelector('.faq .faq-right-box .disease .body-first');
let titleFirstd = document.querySelector('.faq .faq-right-box .disease .main-title-first');
let plusFirstd = document.querySelector('.faq .faq-right-box .disease .main-title-first .plus');
let miunsFirstd = document.querySelector('.faq .faq-right-box .disease .main-title-first .minus');
titleFirstd.addEventListener('click', firstDiseased);
function firstDiseased() {
    firstPd.classList.toggle('change-color');
    bodyFirstd.classList.toggle('display-none');
    bodyFirstd.classList.toggle('display-block');
    plusFirstd.classList.toggle('display-none');
    plusFirstd.classList.toggle('display-block');
    miunsFirstd.classList.toggle('display-none');
    miunsFirstd.classList.toggle('display-block');
    titleFirstd.classList.toggle('text-color');
    titleFirstd.classList.toggle('text-color-hover');
    
};



let secondPd = document.querySelector('.faq .faq-right-box .disease .border-second');
let bodySecondd = document.querySelector('.faq .faq-right-box .disease .body-second');
let titleSecondd = document.querySelector('.faq .faq-right-box .disease .main-title-second');
let plusSecondd = document.querySelector('.faq .faq-right-box .disease .main-title-second .plus');
let miunsSecondd = document.querySelector('.faq .faq-right-box .disease .main-title-second .minus');
titleSecondd.addEventListener('click', secondDiseased);
function secondDiseased() {
    secondPd.classList.toggle('change-color');
    bodySecondd.classList.toggle('display-none');
    bodySecondd.classList.toggle('display-block');
    plusSecondd.classList.toggle('display-none');
    plusSecondd.classList.toggle('display-block');
    miunsSecondd.classList.toggle('display-none');
    miunsSecondd.classList.toggle('display-block');
    titleSecondd.classList.toggle('text-color');
    titleSecondd.classList.toggle('text-color-hover');
    
};


let thirdPd = document.querySelector('.faq .faq-right-box .disease .border-third');
let bodyThirdd = document.querySelector('.faq .faq-right-box .disease .body-third');
let titleThirdd = document.querySelector('.faq .faq-right-box .disease .main-title-third');
let plusThirdd = document.querySelector('.faq .faq-right-box .disease .main-title-third .plus');
let miunsThirdd = document.querySelector('.faq .faq-right-box .disease .main-title-third .minus');

titleThirdd.addEventListener('click', thirdDiseased);
function thirdDiseased() {
    thirdPd.classList.toggle('change-color');
    bodyThirdd.classList.toggle('display-none');
    bodyThirdd.classList.toggle('display-block');
    plusThirdd.classList.toggle('display-none');
    plusThirdd.classList.toggle('display-block');
    miunsThirdd.classList.toggle('display-none');
    miunsThirdd.classList.toggle('display-block');
    titleThirdd.classList.toggle('text-color');
    titleThirdd.classList.toggle('text-color-hover');
    
};



let fourthPd = document.querySelector('.faq .faq-right-box .disease .border-fourth');
let bodyFourthd = document.querySelector('.faq .faq-right-box .disease .body-fourth');
let titleFourthd = document.querySelector('.faq .faq-right-box .disease .main-title-fourth');
let plusFourthd = document.querySelector('.faq .faq-right-box .disease .main-title-fourth .plus');
let miunsFourthd = document.querySelector('.faq .faq-right-box .disease .main-title-fourth .minus');

titleFourthd.addEventListener('click', fourthDiseased);
function fourthDiseased() {
    fourthPd.classList.toggle('change-color');
    bodyFourthd.classList.toggle('display-none');
    bodyFourthd.classList.toggle('display-block');
    plusFourthd.classList.toggle('display-none');
    plusFourthd.classList.toggle('display-block');
    miunsFourthd.classList.toggle('display-none');
    miunsFourthd.classList.toggle('display-block');
    titleFourthd.classList.toggle('text-color');
    titleFourthd.classList.toggle('text-color-hover');
    
};
// End disease




// Start spreads
let spreadsSecondd = document.querySelector('.faq .faq-boxs .faq-left-box .spreads');
let seconddSpreads =document.querySelector('.faq .faq-right-box .spreads');

spreadsSecondd.addEventListener('click', spreadsSecond);

function spreadsSecond() {
    firstDisease.style.display = "none";
    thirdProtects.style.display = "none";
    fourthSymptom.style.display = "none";
    fifthOutbreak.style.display = "none";
    sixthBusters.style.display = "none";
    seconddSpreads.style.display = "block";
    firstPs.classList.toggle('change-color');
    bodyFirsts.classList.toggle('display-none');
    bodyFirsts.classList.toggle('display-block');
    plusFirsts.classList.toggle('display-none');
    plusFirsts.classList.toggle('display-block');
    miunsFirsts.classList.toggle('display-none');
    miunsFirsts.classList.toggle('display-block');
    titleFirsts.classList.toggle('text-color');
    titleFirsts.classList.toggle('text-color-hover');
} 

let firstPs = document.querySelector('.faq .faq-right-box .spreads .border-first');
let bodyFirsts = document.querySelector('.faq .faq-right-box .spreads .body-first');
let titleFirsts = document.querySelector('.faq .faq-right-box .spreads .main-title-first');
let plusFirsts = document.querySelector('.faq .faq-right-box .spreads .main-title-first .plus');
let miunsFirsts = document.querySelector('.faq .faq-right-box .spreads .main-title-first .minus');
titleFirsts.addEventListener('click', firstSpreads);
function firstSpreads() {
    firstPs.classList.toggle('change-color');
    bodyFirsts.classList.toggle('display-none');
    bodyFirsts.classList.toggle('display-block');
    plusFirsts.classList.toggle('display-none');
    plusFirsts.classList.toggle('display-block');
    miunsFirsts.classList.toggle('display-none');
    miunsFirsts.classList.toggle('display-block');
    titleFirsts.classList.toggle('text-color');
    titleFirsts.classList.toggle('text-color-hover');
    
};

let secondPs = document.querySelector('.faq .faq-right-box .spreads .border-second');
let bodySeconds = document.querySelector('.faq .faq-right-box .spreads .body-second');
let titleSeconds = document.querySelector('.faq .faq-right-box .spreads .main-title-second');
let plusSeconds = document.querySelector('.faq .faq-right-box .spreads .main-title-second .plus');
let miunsSeconds = document.querySelector('.faq .faq-right-box .spreads .main-title-second .minus');
titleSeconds.addEventListener('click', secondSpreads);
function secondSpreads() {
    secondPs.classList.toggle('change-color');
    bodySeconds.classList.toggle('display-none');
    bodySeconds.classList.toggle('display-block');
    plusSeconds.classList.toggle('display-none');
    plusSeconds.classList.toggle('display-block');
    miunsSeconds.classList.toggle('display-none');
    miunsSeconds.classList.toggle('display-block');
    titleSeconds.classList.toggle('text-color');
    titleSeconds.classList.toggle('text-color-hover');
    
};

let thirdPs = document.querySelector('.faq .faq-right-box .spreads .border-third');
let bodyThirds = document.querySelector('.faq .faq-right-box .spreads .body-third');
let titleThirds = document.querySelector('.faq .faq-right-box .spreads .main-title-third');
let plusThirds = document.querySelector('.faq .faq-right-box .spreads .main-title-third .plus');
let miunsThirds = document.querySelector('.faq .faq-right-box .spreads .main-title-third .minus');

titleThirds.addEventListener('click', thirdSpreads);
function thirdSpreads() {
    thirdPs.classList.toggle('change-color');
    bodyThirds.classList.toggle('display-none');
    bodyThirds.classList.toggle('display-block');
    plusThirds.classList.toggle('display-none');
    plusThirds.classList.toggle('display-block');
    miunsThirds.classList.toggle('display-none');
    miunsThirds.classList.toggle('display-block');
    titleThirds.classList.toggle('text-color');
    titleThirds.classList.toggle('text-color-hover');
    
};

let fourthPs = document.querySelector('.faq .faq-right-box .spreads .border-fourth');
let bodyFourths = document.querySelector('.faq .faq-right-box .spreads .body-fourth');
let titleFourths = document.querySelector('.faq .faq-right-box .spreads .main-title-fourth');
let plusFourths = document.querySelector('.faq .faq-right-box .spreads .main-title-fourth .plus');
let miunsFourths = document.querySelector('.faq .faq-right-box .spreads .main-title-fourth .minus');

titleFourths.addEventListener('click', fourthSpreads);
function fourthSpreads() {
    fourthPs.classList.toggle('change-color');
    bodyFourths.classList.toggle('display-none');
    bodyFourths.classList.toggle('display-block');
    plusFourths.classList.toggle('display-none');
    plusFourths.classList.toggle('display-block');
    miunsFourths.classList.toggle('display-none');
    miunsFourths.classList.toggle('display-block');
    titleFourths.classList.toggle('text-color');
    titleFourths.classList.toggle('text-color-hover');
    
};


let fifthPs = document.querySelector('.faq .faq-right-box .spreads .border-fifth');
let bodyFifths = document.querySelector('.faq .faq-right-box .spreads .body-fifth');
let titleFifths = document.querySelector('.faq .faq-right-box .spreads .main-title-fifth');
let plusFifths = document.querySelector('.faq .faq-right-box .spreads .main-title-fifth .plus');
let miunsFifths = document.querySelector('.faq .faq-right-box .spreads .main-title-fifth .minus');
titleFifths.addEventListener('click', fifthSpreads);
function fifthSpreads() {
    fifthPs.classList.toggle('change-color');
    bodyFifths.classList.toggle('display-none');
    bodyFifths.classList.toggle('display-block');
    plusFifths.classList.toggle('display-none');
    plusFifths.classList.toggle('display-block');
    miunsFifths.classList.toggle('display-none');
    miunsFifths.classList.toggle('display-block');
    titleFifths.classList.toggle('text-color');
    titleFifths.classList.toggle('text-color-hover');
    
};

let sixthPs = document.querySelector('.faq .faq-right-box .spreads .border-sixth');
let bodySixths = document.querySelector('.faq .faq-right-box .spreads .body-sixth');
let titleSixths = document.querySelector('.faq .faq-right-box .spreads .main-title-sixth');
let plusSixths = document.querySelector('.faq .faq-right-box .spreads .main-title-sixth .plus');
let miunsSixths = document.querySelector('.faq .faq-right-box .spreads .main-title-sixth .minus');
titleSixths.addEventListener('click', sixthSpreads);
function sixthSpreads() {
    sixthPs.classList.toggle('change-color');
    bodySixths.classList.toggle('display-none');
    bodySixths.classList.toggle('display-block');
    plusSixths.classList.toggle('display-none');
    plusSixths.classList.toggle('display-block');
    miunsSixths.classList.toggle('display-none');
    miunsSixths.classList.toggle('display-block');
    titleSixths.classList.toggle('text-color');
    titleSixths.classList.toggle('text-color-hover');
    
};
// End spreads 

// Start protects
let protectsThird = document.querySelector('.faq .faq-boxs .faq-left-box .protects');
let thirdProtects =document.querySelector('.faq .faq-right-box .protects');

protectsThird.addEventListener('click', protectsThirdt);

function protectsThirdt() {
    firstDisease.style.display = "none";
    seconddSpreads.style.display = "none";
    fourthSymptom.style.display = "none";
    fifthOutbreak.style.display = "none"
    sixthBusters.style.display = "none";
    thirdProtects.style.display = "block";
    firstPp.classList.toggle('change-color');
    bodyFirstp.classList.toggle('display-none');
    bodyFirstp.classList.toggle('display-block');
    plusFirstp.classList.toggle('display-none');
    plusFirstp.classList.toggle('display-block');
    miunsFirstp.classList.toggle('display-none');
    miunsFirstp.classList.toggle('display-block');
    titleFirstp.classList.toggle('text-color');
    titleFirstp.classList.toggle('text-color-hover');
}

let firstPp = document.querySelector('.faq .faq-right-box .protects .border-first');
let bodyFirstp = document.querySelector('.faq .faq-right-box .protects .body-first');
let titleFirstp = document.querySelector('.faq .faq-right-box .protects .main-title-first');
let plusFirstp = document.querySelector('.faq .faq-right-box .protects .main-title-first .plus');
let miunsFirstp = document.querySelector('.faq .faq-right-box .protects .main-title-first .minus');
titleFirstp.addEventListener('click', firstProtects);
function firstProtects() {
    firstPp.classList.toggle('change-color');
    bodyFirstp.classList.toggle('display-none');
    bodyFirstp.classList.toggle('display-block');
    plusFirstp.classList.toggle('display-none');
    plusFirstp.classList.toggle('display-block');
    miunsFirstp.classList.toggle('display-none');
    miunsFirstp.classList.toggle('display-block');
    titleFirstp.classList.toggle('text-color');
    titleFirstp.classList.toggle('text-color-hover');
    
};

let secondPp = document.querySelector('.faq .faq-right-box .protects .border-second');
let bodySecondp = document.querySelector('.faq .faq-right-box .protects .body-second');
let titleSecondp = document.querySelector('.faq .faq-right-box .protects .main-title-second');
let plusSecondp = document.querySelector('.faq .faq-right-box .protects .main-title-second .plus');
let miunsSecondp = document.querySelector('.faq .faq-right-box .protects .main-title-second .minus');
titleSecondp.addEventListener('click', secondProtects);
function secondProtects() {
    secondPp.classList.toggle('change-color');
    bodySecondp.classList.toggle('display-none');
    bodySecondp.classList.toggle('display-block');
    plusSecondp.classList.toggle('display-none');
    plusSecondp.classList.toggle('display-block');
    miunsSecondp.classList.toggle('display-none');
    miunsSecondp.classList.toggle('display-block');
    titleSecondp.classList.toggle('text-color');
    titleSecondp.classList.toggle('text-color-hover');
    
};

let thirdPp = document.querySelector('.faq .faq-right-box .protects .border-third');
let bodyThirdp = document.querySelector('.faq .faq-right-box .protects .body-third');
let titleThirdp = document.querySelector('.faq .faq-right-box .protects .main-title-third');
let plusThirdp = document.querySelector('.faq .faq-right-box .protects .main-title-third .plus');
let miunsThirdp = document.querySelector('.faq .faq-right-box .protects .main-title-third .minus');
titleThirdp.addEventListener('click', thirdProtectsp);
function thirdProtectsp() {
    thirdPp.classList.toggle('change-color');
    bodyThirdp.classList.toggle('display-none');
    bodyThirdp.classList.toggle('display-block');
    plusThirdp.classList.toggle('display-none');
    plusThirdp.classList.toggle('display-block');
    miunsThirdp.classList.toggle('display-none');
    miunsThirdp.classList.toggle('display-block');
    titleThirdp.classList.toggle('text-color');
    titleThirdp.classList.toggle('text-color-hover');
    
};

let fourthPp = document.querySelector('.faq .faq-right-box .protects .border-fourth');
let bodyFourthp = document.querySelector('.faq .faq-right-box .protects .body-fourth');
let titleFourthp = document.querySelector('.faq .faq-right-box .protects .main-title-fourth');
let plusFourthp = document.querySelector('.faq .faq-right-box .protects .main-title-fourth .plus');
let miunsFourthp = document.querySelector('.faq .faq-right-box .protects .main-title-fourth .minus');
titleFourthp.addEventListener('click', fourthProtects);
function fourthProtects() {
    fourthPp.classList.toggle('change-color');
    bodyFourthp.classList.toggle('display-none');
    bodyFourthp.classList.toggle('display-block');
    plusFourthp.classList.toggle('display-none');
    plusFourthp.classList.toggle('display-block');
    miunsFourthp.classList.toggle('display-none');
    miunsFourthp.classList.toggle('display-block');
    titleFourthp.classList.toggle('text-color');
    titleFourthp.classList.toggle('text-color-hover');
};

let fifthPp = document.querySelector('.faq .faq-right-box .protects .border-fifth');
let bodyFifthp = document.querySelector('.faq .faq-right-box .protects .body-fifth');
let titleFifthp = document.querySelector('.faq .faq-right-box .protects .main-title-fifth');
let plusFifthp = document.querySelector('.faq .faq-right-box .protects .main-title-fifth .plus');
let miunsFifthp = document.querySelector('.faq .faq-right-box .protects .main-title-fifth .minus');
titleFifthp.addEventListener('click', fifthProtects);
function fifthProtects() {
    fifthPp.classList.toggle('change-color');
    bodyFifthp.classList.toggle('display-none');
    bodyFifthp.classList.toggle('display-block');
    plusFifthp.classList.toggle('display-none');
    plusFifthp.classList.toggle('display-block');
    miunsFifthp.classList.toggle('display-none');
    miunsFifthp.classList.toggle('display-block');
    titleFifthp.classList.toggle('text-color');
    titleFifthp.classList.toggle('text-color-hover');
};
// End protects


// Start symptom
let symptomFourth = document.querySelector('.faq .faq-boxs .faq-left-box .symptom');
let fourthSymptom =document.querySelector('.faq .faq-right-box .symptom');

symptomFourth.addEventListener('click', symptomFourthr);

function symptomFourthr() {
    firstDisease.style.display = "none";
    seconddSpreads.style.display = "none";
    thirdProtects.style.display = "none";
    fifthOutbreak.style.display = "none"
    sixthBusters.style.display = "none";
    fourthSymptom.style.display = "block";
    firstPt.classList.toggle('change-color');
    bodyFirstt.classList.toggle('display-none');
    bodyFirstt.classList.toggle('display-block');
    plusFirstt.classList.toggle('display-none');
    plusFirstt.classList.toggle('display-block');
    miunsFirstt.classList.toggle('display-none');
    miunsFirstt.classList.toggle('display-block');
    titleFirstt.classList.toggle('text-color');
    titleFirstt.classList.toggle('text-color-hover');
}


let firstPt = document.querySelector('.faq .faq-right-box .symptom .border-first');
let bodyFirstt = document.querySelector('.faq .faq-right-box .symptom .body-first');
let titleFirstt = document.querySelector('.faq .faq-right-box .symptom .main-title-first');
let plusFirstt = document.querySelector('.faq .faq-right-box .symptom .main-title-first .plus');
let miunsFirstt = document.querySelector('.faq .faq-right-box .symptom .main-title-first .minus');
titleFirstt.addEventListener('click', firstSymptomt);
function firstSymptomt() {
    firstPt.classList.toggle('change-color');
    bodyFirstt.classList.toggle('display-none');
    bodyFirstt.classList.toggle('display-block');
    plusFirstt.classList.toggle('display-none');
    plusFirstt.classList.toggle('display-block');
    miunsFirstt.classList.toggle('display-none');
    miunsFirstt.classList.toggle('display-block');
    titleFirstt.classList.toggle('text-color');
    titleFirstt.classList.toggle('text-color-hover');
    
};

let secondPt = document.querySelector('.faq .faq-right-box .symptom .border-second');
let bodySecondt = document.querySelector('.faq .faq-right-box .symptom .body-second');
let titleSecondt = document.querySelector('.faq .faq-right-box .symptom .main-title-second');
let plusSecondt = document.querySelector('.faq .faq-right-box .symptom .main-title-second .plus');
let miunsSecondt = document.querySelector('.faq .faq-right-box .symptom .main-title-second .minus');
titleSecondt.addEventListener('click', secondSymptomt);
function secondSymptomt() {
    secondPt.classList.toggle('change-color');
    bodySecondt.classList.toggle('display-none');
    bodySecondt.classList.toggle('display-block');
    plusSecondt.classList.toggle('display-none');
    plusSecondt.classList.toggle('display-block');
    miunsSecondt.classList.toggle('display-none');
    miunsSecondt.classList.toggle('display-block');
    titleSecondt.classList.toggle('text-color');
    titleSecondt.classList.toggle('text-color-hover');
    
};

let thirdPt = document.querySelector('.faq .faq-right-box .symptom .border-third');
let bodyThirdt = document.querySelector('.faq .faq-right-box .symptom .body-third');
let titleThirdt = document.querySelector('.faq .faq-right-box .symptom .main-title-third');
let plusThirdt = document.querySelector('.faq .faq-right-box .symptom .main-title-third .plus');
let miunsThirdt = document.querySelector('.faq .faq-right-box .symptom .main-title-third .minus');
titleThirdt.addEventListener('click', thirdSymptomt);
function thirdSymptomt() {
    thirdPt.classList.toggle('change-color');
    bodyThirdt.classList.toggle('display-none');
    bodyThirdt.classList.toggle('display-block');
    plusThirdt.classList.toggle('display-none');
    plusThirdt.classList.toggle('display-block');
    miunsThirdt.classList.toggle('display-none');
    miunsThirdt.classList.toggle('display-block');
    titleThirdt.classList.toggle('text-color');
    titleThirdt.classList.toggle('text-color-hover');
    
};

let fourthPt = document.querySelector('.faq .faq-right-box .symptom .border-fourth');
let bodyFourtht = document.querySelector('.faq .faq-right-box .symptom .body-fourth');
let titleFourtht = document.querySelector('.faq .faq-right-box .symptom .main-title-fourth');
let plusFourtht = document.querySelector('.faq .faq-right-box .symptom .main-title-fourth .plus');
let miunsFourtht = document.querySelector('.faq .faq-right-box .symptom .main-title-fourth .minus');
titleFourtht.addEventListener('click', fourthSymptomt);
function fourthSymptomt() {
    fourthPt.classList.toggle('change-color');
    bodyFourtht.classList.toggle('display-none');
    bodyFourtht.classList.toggle('display-block');
    plusFourtht.classList.toggle('display-none');
    plusFourtht.classList.toggle('display-block');
    miunsFourtht.classList.toggle('display-none');
    miunsFourtht.classList.toggle('display-block');
    titleFourtht.classList.toggle('text-color');
    titleFourtht.classList.toggle('text-color-hover');
};
// End symptom


// Start outbreak
let outbreakFifth = document.querySelector('.faq .faq-boxs .faq-left-box .outbreak');
let fifthOutbreak =document.querySelector('.faq .faq-right-box .outbreak');

outbreakFifth.addEventListener('click', outbreakFifthh);

function outbreakFifthh() {
    firstDisease.style.display = "none";
    seconddSpreads.style.display = "none";
    thirdProtects.style.display = "none";
    fourthSymptom.style.display = "none";
    sixthBusters.style.display = "none";
    fifthOutbreak.style.display = "block";
    firstPo.classList.toggle('change-color');
    bodyFirsto.classList.toggle('display-none');
    bodyFirsto.classList.toggle('display-block');
    plusFirsto.classList.toggle('display-none');
    plusFirsto.classList.toggle('display-block');
    miunsFirsto.classList.toggle('display-none');
    miunsFirsto.classList.toggle('display-block');
    titleFirsto.classList.toggle('text-color');
    titleFirsto.classList.toggle('text-color-hover');
    
}


let firstPo = document.querySelector('.faq .faq-right-box .outbreak .border-first');
let bodyFirsto = document.querySelector('.faq .faq-right-box .outbreak .body-first');
let titleFirsto = document.querySelector('.faq .faq-right-box .outbreak .main-title-first');
let plusFirsto = document.querySelector('.faq .faq-right-box .outbreak .main-title-first .plus');
let miunsFirsto = document.querySelector('.faq .faq-right-box .outbreak .main-title-first .minus');
titleFirsto.addEventListener('click', firstOutbreako);
function firstOutbreako() {
    firstPo.classList.toggle('change-color');
    bodyFirsto.classList.toggle('display-none');
    bodyFirsto.classList.toggle('display-block');
    plusFirsto.classList.toggle('display-none');
    plusFirsto.classList.toggle('display-block');
    miunsFirsto.classList.toggle('display-none');
    miunsFirsto.classList.toggle('display-block');
    titleFirsto.classList.toggle('text-color');
    titleFirsto.classList.toggle('text-color-hover');
    
};

let secondPo = document.querySelector('.faq .faq-right-box .outbreak .border-second');
let bodySecondo = document.querySelector('.faq .faq-right-box .outbreak .body-second');
let titleSecondo = document.querySelector('.faq .faq-right-box .outbreak .main-title-second');
let plusSecondo = document.querySelector('.faq .faq-right-box .outbreak .main-title-second .plus');
let miunsSecondo = document.querySelector('.faq .faq-right-box .outbreak .main-title-second .minus');
titleSecondo.addEventListener('click', secondOutbreako);
function secondOutbreako() {
    secondPo.classList.toggle('change-color');
    bodySecondo.classList.toggle('display-none');
    bodySecondo.classList.toggle('display-block');
    plusSecondo.classList.toggle('display-none');
    plusSecondo.classList.toggle('display-block');
    miunsSecondo.classList.toggle('display-none');
    miunsSecondo.classList.toggle('display-block');
    titleSecondo.classList.toggle('text-color');
    titleSecondo.classList.toggle('text-color-hover');
    
};

let thirdPo = document.querySelector('.faq .faq-right-box .outbreak .border-third');
let bodyThirdo = document.querySelector('.faq .faq-right-box .outbreak .body-third');
let titleThirdo = document.querySelector('.faq .faq-right-box .outbreak .main-title-third');
let plusThirdo = document.querySelector('.faq .faq-right-box .outbreak .main-title-third .plus');
let miunsThirdo = document.querySelector('.faq .faq-right-box .outbreak .main-title-third .minus');
titleThirdo.addEventListener('click', thirdOutbreako);
function thirdOutbreako() {
    thirdPo.classList.toggle('change-color');
    bodyThirdo.classList.toggle('display-none');
    bodyThirdo.classList.toggle('display-block');
    plusThirdo.classList.toggle('display-none');
    plusThirdo.classList.toggle('display-block');
    miunsThirdo.classList.toggle('display-none');
    miunsThirdo.classList.toggle('display-block');
    titleThirdo.classList.toggle('text-color');
    titleThirdo.classList.toggle('text-color-hover');
    
};

let fourthPo = document.querySelector('.faq .faq-right-box .outbreak .border-fourth');
let bodyFourtho = document.querySelector('.faq .faq-right-box .outbreak .body-fourth');
let titleFourtho = document.querySelector('.faq .faq-right-box .outbreak .main-title-fourth');
let plusFourtho = document.querySelector('.faq .faq-right-box .outbreak .main-title-fourth .plus');
let miunsFourtho = document.querySelector('.faq .faq-right-box .outbreak .main-title-fourth .minus');
titleFourtho.addEventListener('click', fourthOutbreako);
function fourthOutbreako() {
    fourthPo.classList.toggle('change-color');
    bodyFourtho.classList.toggle('display-none');
    bodyFourtho.classList.toggle('display-block');
    plusFourtho.classList.toggle('display-none');
    plusFourtho.classList.toggle('display-block');
    miunsFourtho.classList.toggle('display-none');
    miunsFourtho.classList.toggle('display-block');
    titleFourtho.classList.toggle('text-color');
    titleFourtho.classList.toggle('text-color-hover');
};

let fifthPo = document.querySelector('.faq .faq-right-box .outbreak .border-fifth');
let bodyFiftho = document.querySelector('.faq .faq-right-box .outbreak .body-fifth');
let titleFiftho = document.querySelector('.faq .faq-right-box .outbreak .main-title-fifth');
let plusFiftho = document.querySelector('.faq .faq-right-box .outbreak .main-title-fifth .plus');
let miunsFiftho = document.querySelector('.faq .faq-right-box .outbreak .main-title-fifth .minus');
titleFiftho.addEventListener('click', fifthOutbreako);
function fifthOutbreako() {
    fifthPo.classList.toggle('change-color');
    bodyFiftho.classList.toggle('display-none');
    bodyFiftho.classList.toggle('display-block');
    plusFiftho.classList.toggle('display-none');
    plusFiftho.classList.toggle('display-block');
    miunsFiftho.classList.toggle('display-none');
    miunsFiftho.classList.toggle('display-block');
    titleFiftho.classList.toggle('text-color');
    titleFiftho.classList.toggle('text-color-hover');
};

let sixthPo = document.querySelector('.faq .faq-right-box .outbreak .border-sixth');
let bodySixtho = document.querySelector('.faq .faq-right-box .outbreak .body-sixth');
let titleSixtho = document.querySelector('.faq .faq-right-box .outbreak .main-title-sixth');
let plusSixtho = document.querySelector('.faq .faq-right-box .outbreak .main-title-sixth .plus');
let miunsSixtho = document.querySelector('.faq .faq-right-box .outbreak .main-title-sixth .minus');
titleSixtho.addEventListener('click', sixthOutbreako);
function sixthOutbreako() {
    sixthPo.classList.toggle('change-color');
    bodySixtho.classList.toggle('display-none');
    bodySixtho.classList.toggle('display-block');
    plusSixtho.classList.toggle('display-none');
    plusSixtho.classList.toggle('display-block');
    miunsSixtho.classList.toggle('display-none');
    miunsSixtho.classList.toggle('display-block');
    titleSixtho.classList.toggle('text-color');
    titleSixtho.classList.toggle('text-color-hover');
    
};
// End outbreak


// Start busters
let bustersSixth = document.querySelector('.faq .faq-boxs .faq-left-box .busters');
let sixthBusters =document.querySelector('.faq .faq-right-box .busters');

bustersSixth.addEventListener('click', bustersSixtht);

function bustersSixtht() {
    firstDisease.style.display = "none";
    seconddSpreads.style.display = "none";
    thirdProtects.style.display = "none";
    fourthSymptom.style.display = "none";
    fifthOutbreak.style.display = "none";
    sixthBusters.style.display = "block";
    firstPm.classList.toggle('change-color');
    bodyFirstm.classList.toggle('display-none');
    bodyFirstm.classList.toggle('display-block');
    plusFirstm.classList.toggle('display-none');
    plusFirstm.classList.toggle('display-block');
    miunsFirstm.classList.toggle('display-none');
    miunsFirstm.classList.toggle('display-block');
    titleFirstm.classList.toggle('text-color');
    titleFirstm.classList.toggle('text-color-hover');
    
}


let firstPm = document.querySelector('.faq .faq-right-box .busters .border-first');
let bodyFirstm = document.querySelector('.faq .faq-right-box .busters .body-first');
let titleFirstm = document.querySelector('.faq .faq-right-box .busters .main-title-first');
let plusFirstm = document.querySelector('.faq .faq-right-box .busters .main-title-first .plus');
let miunsFirstm = document.querySelector('.faq .faq-right-box .busters .main-title-first .minus');
titleFirstm.addEventListener('click', firstBustersm);
function firstBustersm() {
    firstPm.classList.toggle('change-color');
    bodyFirstm.classList.toggle('display-none');
    bodyFirstm.classList.toggle('display-block');
    plusFirstm.classList.toggle('display-none');
    plusFirstm.classList.toggle('display-block');
    miunsFirstm.classList.toggle('display-none');
    miunsFirstm.classList.toggle('display-block');
    titleFirstm.classList.toggle('text-color');
    titleFirstm.classList.toggle('text-color-hover');
    
};

let secondPm = document.querySelector('.faq .faq-right-box .busters .border-second');
let bodySecondm = document.querySelector('.faq .faq-right-box .busters .body-second');
let titleSecondm = document.querySelector('.faq .faq-right-box .busters .main-title-second');
let plusSecondm = document.querySelector('.faq .faq-right-box .busters .main-title-second .plus');
let miunsSecondm = document.querySelector('.faq .faq-right-box .busters .main-title-second .minus');
titleSecondm.addEventListener('click', secondBustersm);
function secondBustersm() {
    secondPm.classList.toggle('change-color');
    bodySecondm.classList.toggle('display-none');
    bodySecondm.classList.toggle('display-block');
    plusSecondm.classList.toggle('display-none');
    plusSecondm.classList.toggle('display-block');
    miunsSecondm.classList.toggle('display-none');
    miunsSecondm.classList.toggle('display-block');
    titleSecondm.classList.toggle('text-color');
    titleSecondm.classList.toggle('text-color-hover');
    
};

let thirdPm = document.querySelector('.faq .faq-right-box .busters .border-third');
let bodyThirdm = document.querySelector('.faq .faq-right-box .busters .body-third');
let titleThirdm = document.querySelector('.faq .faq-right-box .busters .main-title-third');
let plusThirdm = document.querySelector('.faq .faq-right-box .busters .main-title-third .plus');
let miunsThirdm = document.querySelector('.faq .faq-right-box .busters .main-title-third .minus');
titleThirdm.addEventListener('click', thirdBustersm);
function thirdBustersm() {
    thirdPm.classList.toggle('change-color');
    bodyThirdm.classList.toggle('display-none');
    bodyThirdm.classList.toggle('display-block');
    plusThirdm.classList.toggle('display-none');
    plusThirdm.classList.toggle('display-block');
    miunsThirdm.classList.toggle('display-none');
    miunsThirdm.classList.toggle('display-block');
    titleThirdm.classList.toggle('text-color');
    titleThirdm.classList.toggle('text-color-hover');
    
};

let fourthPm = document.querySelector('.faq .faq-right-box .busters .border-fourth');
let bodyFourthm = document.querySelector('.faq .faq-right-box .busters .body-fourth');
let titleFourthm = document.querySelector('.faq .faq-right-box .busters .main-title-fourth');
let plusFourthm = document.querySelector('.faq .faq-right-box .busters .main-title-fourth .plus');
let miunsFourthm = document.querySelector('.faq .faq-right-box .busters .main-title-fourth .minus');
titleFourthm.addEventListener('click', fourthBustersm);
function fourthBustersm() {
    fourthPm.classList.toggle('change-color');
    bodyFourthm.classList.toggle('display-none');
    bodyFourthm.classList.toggle('display-block');
    plusFourthm.classList.toggle('display-none');
    plusFourthm.classList.toggle('display-block');
    miunsFourthm.classList.toggle('display-none');
    miunsFourthm.classList.toggle('display-block');
    titleFourthm.classList.toggle('text-color');
    titleFourthm.classList.toggle('text-color-hover');
};

let fifthPm = document.querySelector('.faq .faq-right-box .busters .border-fifth');
let bodyFifthm = document.querySelector('.faq .faq-right-box .busters .body-fifth');
let titleFifthm = document.querySelector('.faq .faq-right-box .busters .main-title-fifth');
let plusFifthm = document.querySelector('.faq .faq-right-box .busters .main-title-fifth .plus');
let miunsFifthm = document.querySelector('.faq .faq-right-box .busters .main-title-fifth .minus');
titleFifthm.addEventListener('click', fifthBustersm);
function fifthBustersm() {
    fifthPm.classList.toggle('change-color');
    bodyFifthm.classList.toggle('display-none');
    bodyFifthm.classList.toggle('display-block');
    plusFifthm.classList.toggle('display-none');
    plusFifthm.classList.toggle('display-block');
    miunsFifthm.classList.toggle('display-none');
    miunsFifthm.classList.toggle('display-block');
    titleFifthm.classList.toggle('text-color');
    titleFifthm.classList.toggle('text-color-hover');
};

let sixthPm = document.querySelector('.faq .faq-right-box .busters .border-sixth');
let bodySixthm = document.querySelector('.faq .faq-right-box .busters .body-sixth');
let titleSixthm = document.querySelector('.faq .faq-right-box .busters .main-title-sixth');
let plusSixthm = document.querySelector('.faq .faq-right-box .busters .main-title-sixth .plus');
let miunsSixthm = document.querySelector('.faq .faq-right-box .busters .main-title-sixth .minus');
titleSixthm.addEventListener('click', sixthBustersm);
function sixthBustersm() {
    sixthPm.classList.toggle('change-color');
    bodySixthm.classList.toggle('display-none');
    bodySixthm.classList.toggle('display-block');
    plusSixthm.classList.toggle('display-none');
    plusSixthm.classList.toggle('display-block');
    miunsSixthm.classList.toggle('display-none');
    miunsSixthm.classList.toggle('display-block');
    titleSixthm.classList.toggle('text-color');
    titleSixthm.classList.toggle('text-color-hover');
    
};

let seventhPm = document.querySelector('.faq .faq-right-box .busters .border-seventh');
let bodySeventhm = document.querySelector('.faq .faq-right-box .busters .body-seventh');
let titleSeventhm = document.querySelector('.faq .faq-right-box .busters .main-title-seventh');
let plusSeventhm = document.querySelector('.faq .faq-right-box .busters .main-title-seventh .plus');
let miunsSeventhm = document.querySelector('.faq .faq-right-box .busters .main-title-seventh .minus');
titleSeventhm.addEventListener('click', seventhBustersm);
function seventhBustersm() {
    seventhPm.classList.toggle('change-color');
    bodySeventhm.classList.toggle('display-none');
    bodySeventhm.classList.toggle('display-block');
    plusSeventhm.classList.toggle('display-none');
    plusSeventhm.classList.toggle('display-block');
    miunsSeventhm.classList.toggle('display-none');
    miunsSeventhm.classList.toggle('display-block');
    titleSeventhm.classList.toggle('text-color');
    titleSeventhm.classList.toggle('text-color-hover');
    
};

let eighthPm = document.querySelector('.faq .faq-right-box .busters .border-eighth');
let bodyEighthm = document.querySelector('.faq .faq-right-box .busters .body-eighth');
let titleEighthm = document.querySelector('.faq .faq-right-box .busters .main-title-eighth');
let plusEighthm = document.querySelector('.faq .faq-right-box .busters .main-title-eighth .plus');
let miunsEighthm = document.querySelector('.faq .faq-right-box .busters .main-title-eighth .minus');
titleEighthm.addEventListener('click', eighthBustersm);
function eighthBustersm() {
    eighthPm.classList.toggle('change-color');
    bodyEighthm.classList.toggle('display-none');
    bodyEighthm.classList.toggle('display-block');
    plusEighthm.classList.toggle('display-none');
    plusEighthm.classList.toggle('display-block');
    miunsEighthm.classList.toggle('display-none');
    miunsEighthm.classList.toggle('display-block');
    titleEighthm.classList.toggle('text-color');
    titleEighthm.classList.toggle('text-color-hover');
    
};
// End busters
// End faq-boxs






