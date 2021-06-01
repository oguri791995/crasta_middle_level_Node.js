// header-img-slide
let img = document.getElementsByClassName("header-img");
let hc = document.getElementsByClassName("header-main")[0];

let removeNum = 0;
let addNum = 1;

let humbergerTrigger = false;

function slide_change(){   


    img[removeNum].classList.remove("displayOn");
    removeNum++;
    if(removeNum > 2){
        removeNum = 0;
    }
    img[addNum].classList.add("displayOn");
    addNum++;
    if(addNum > 2){  
        addNum = 0;
    }
}

//わからん
function slide_opacity(){
    img[removeNum].style.opacity = "10%"
    img[removeNum].style.transition = "2s"
}

slide = setInterval(slide_change,3000);

// humberger Menu
let humberger = document.getElementsByClassName("humberger")[0];
let topBar = document.getElementsByClassName("top-bar")[0];
let middleBar = document.getElementsByClassName("middle-bar")[0];
let bottomBar = document.getElementsByClassName("bottom-bar")[0];
let headerTitle = document.getElementsByClassName("header-title")[0];
let navWrapper = document.getElementsByClassName("nav-wrapper")[0];
let headerComment = document.getElementsByClassName("header-comment")[0];
let body = document.getElementsByTagName("body")[0];
let headerImg = document.getElementsByClassName("header-img");
let navItem = document.getElementsByClassName("nav-item");
let humberUl = document.getElementsByClassName("")

humberger.addEventListener("click",toggle);


//navItemを押下したときにtoggle関数を実行する※これがないと背景が黒いまま
if(window.matchMedia('(max-width: 768px)').matches){
    for(let i=0;i<navItem.length;i++){
        navItem[i].addEventListener("click",toggle); 
    }

}
addEventListener("scroll",function(){
    if(window.matchMedia('(min-width: 769px)').matches){
        // navWrapper.style.position = "static"
        // navWrapper.classList.remove("displayNone-sp");
        // topBar.classList.remove("top-bar-click");
        // middleBar.classList.remove("middle-bar-click");
        // bottomBar.classList.remove("bottom-bar-click");
        // headerTitle.classList.remove("header-title");
        // headerTitle.classList.remove("test");
        // headerComment.classList.remove("displayNone-sp");
        // body.classList.remove("noScroll");
        // body.classList.remove("back");
        // for(let j = 0;j < headerImg.length;j ++){
        //     headerImg[j].classList.remove("displayNone-sp");
        // }
    }
})


function toggle(){
    //わからない
    // if(humbergerTrigger == false){
    //     clearInterval(slide)
    //     humbergerTrigger = true
    // }
    // else if(humbergerTrigger == true){
    //     slide;
    //     humbergerTrigger = false
    // }

    // console.log(humbergerTrigger)

    navWrapper.classList.toggle("displayNone-sp");
    topBar.classList.toggle("top-bar-click");
    middleBar.classList.toggle("middle-bar-click");
    bottomBar.classList.toggle("bottom-bar-click");
    // headerTitle.classList.toggle("header-title");
    headerTitle.classList.toggle("test");
    headerComment.classList.toggle("displayNone-sp");
    body.classList.toggle("noScroll");
    body.classList.toggle("back");
    for(let j = 0;j < headerImg.length;j ++){
        headerImg[j].classList.toggle("displayNone-sp");
    }
}

//sticky
// $(function(){
//     let $window = $(window);
//     let $header = $("header");
//     let $topLine = $(".top-line");
//     let headerHeight = $header.height();
//     let topLineHeight = $topLine.height();

//     $window.scroll(function(){
//         let currentPos = $window.scrollTop(); //現在時点

//         if(currentPos >= headerHeight -topLineHeight){
//             $header.addClass('sticky');
//             $topLine.addClass('sticky');
//         } else {
//             $header.removeClass('sticky');
//             $nav.removeClass('sticky');
//         }
//     })
// })

let headerText = document.getElementsByClassName("header-text")[0];
let topLine = document.getElementsByClassName("top-line")[0];
let conceptInner = document.getElementsByClassName("concept-inner")[0];

let stickyTrigger = false;

function sticky(){      

    // let conceptPos = document.querySelector('#concept').getBoundingClientRect().top; 
    let conceptPos = document.querySelector('.displayOn img').getBoundingClientRect().bottom; 

    // let windowCurrent = window.pageYOffset;

    if(conceptPos < 0 && stickyTrigger == false){
        stickyToggle()
        stickyTrigger = true;
    }

    if(conceptPos >= 0 && stickyTrigger == true){
        stickyToggle()
        stickyTrigger = false;
    }
    // console.log(conceptPos);
}

function stickyToggle(){
    headerText.classList.toggle("sticky");
    topLine.classList.toggle("sticky");
    headerTitle.classList.toggle("sticky");
    navWrapper.classList.toggle("sticky");
    conceptInner.classList.toggle("sticky");
}

addEventListener("scroll",sticky);
