// document elements
const headerSmall = document.getElementById('headerSmall');
const logoBig = document.getElementById('fullLogo');
const svgIcon = document.getElementById('avrIcon');
const menuTop = document.getElementById('header-menu');


//sections
const oneSection = document.getElementById('collapse');
const twoSection = document.getElementById('collapse02');
const threeSection = document.getElementById('collapse03');
const textMargin = document.getElementsByClassName('titleblock');
const aboutBlurbText = document.getElementsByClassName('textbox');
const titleFont = document.querySelector(".title");
const footerHeight = document.getElementById('footer');
const aboutBlurb = document.getElementById('aboutblurb');
const footerDoc = document.querySelector('footer');


// scroll height is the top of page
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


// media queries
var mql = window.matchMedia('(orientation: landscape)');
var sdl = window.matchMedia('(max-width: 800px) and (orientation: landscape)');
var sdp = window.matchMedia('(orientation: portrait)');


if (sdp.matches) {
     fullLogo.style.display = 'none';
     headerSmall.style.top = '92' + '%';
     headerSmall.style.transition = '0ms';
}
else {
     fullLogo.style.display = '';
     headerSmall.style.top = '';
     headerSmall.style.transition = '';

}


// different header on load

//about page
if (window.location.href.indexOf('about') > -1) {

     fullLogo.style.display = 'none';
     svgIcon.src = 'images/Icon_blue.png';
     headerSmall.style.top = '0' + 'px';


     if (mql.matches) {
          headerSmall.style.top = '0' + 'px';
          headerSmall.style.backgroundColor = 'white';
          headerSmall.style.color = 'black';
          menuTop.style.color = 'black';


     }
     else {
          headerSmall.style.top = '92' + '%';
          headerSmall.style.backgroundColor = '';
          headerSmall.style.color = 'white';
          menuTop.style.color = 'white';
          fullLogo.style.display = 'none';

     }

}


//process page
if (window.location.href.indexOf('process') > -1) {

     fullLogo.style.display = 'none';
     svgIcon.src = 'images/Icon_blue.png';
     headerSmall.style.backgroundColor = '';

     if (mql.matches) {
          headerSmall.style.top = '';
          headerSmall.style.backgroundColor = '';
          headerSmall.style.color = 'black';
          menuTop.style.color = 'black';
          fullLogo.style.display = 'none';



     }
     else {
          headerSmall.style.top = '92' + '%';
          headerSmall.style.backgroundColor = '';
          headerSmall.style.color = 'white';
          menuTop.style.color = 'white';

     }

}

//process page
if (window.location.href.indexOf('design') > -1) {

     fullLogo.style.display = 'none';





}

//function for header change on scroll

function changeHeader() {

     //design page
     if (window.location.href.indexOf('designs') > -1) {
          if (document.body.getBoundingClientRect().top <= -50) //  displayed when scrolled

          {
               fullLogo.style.display = 'none';
               svgIcon.src = 'images/Icon_white.png';
               headerSmall.style.top = '0' + 'px';


               if (mql.matches) {
                    headerSmall.style.top = '0' + 'px';
                    headerSmall.style.backgroundColor = '#010118';
                    headerSmall.style.color = 'white';
                    menuTop.style.color = 'white';


               }
               else {
                    headerSmall.style.top = '92' + '%';
                    headerSmall.style.backgroundColor = '';
                    headerSmall.style.color = 'white';
                    menuTop.style.color = 'white';
                    fullLogo.style.display = 'none';

               }
          }


          //top of page display
          else {
               headerSmall.style.color = 'white';
               menuTop.style.color = 'white';
               fullLogo.style.top = '';
               fullLogo.style.display = 'none';
               headerSmall.style.display = '';

               svgIcon.src = 'images/Icon_white.png';

               if (mql.matches) {
                    headerSmall.style.top = '';
                    headerSmall.style.backgroundColor = '';

               }
               else {
                    headerSmall.style.top = '90' + '%';
                    headerSmall.style.backgroundColor = '';
                    fullLogo.style.display = 'none';

               }




          }
     }




     //homepage page

     else if (window.location.href === "https://www.alexandravanrijckevorsel.com/") {

          if (document.body.getBoundingClientRect().top <= -50) //  displayed when scrolled
          {
               fullLogo.style.display = 'none';
               svgIcon.src = 'images/Icon_blue.png';
               headerSmall.style.top = '0' + 'px';


               if (mql.matches) {
                    headerSmall.style.top = '0' + 'px';
                    headerSmall.style.backgroundColor = '#ffffff';
                    headerSmall.style.color = 'black';
                    menuTop.style.color = 'black';


               }
               else {
                    headerSmall.style.top = '92' + '%';
                    headerSmall.style.backgroundColor = '';
                    headerSmall.style.color = 'white';
                    menuTop.style.color = 'white';
               }
          }





          //top of page display
          else {
               headerSmall.style.color = 'white';
               menuTop.style.color = 'white';
               fullLogo.style.top = '';
               fullLogo.style.display = 'flex';
               headerSmall.style.display = '';

               svgIcon.src = 'images/Icon_white.png';

               if (mql.matches) {
                    headerSmall.style.top = '';
                    headerSmall.style.backgroundColor = '';

               }
               else {
                    headerSmall.style.top = '92' + '%';
                    headerSmall.style.backgroundColor = '';
               }




          }
     }

     //process page

     else if (window.location.href.indexOf('process') > -1) {

          if (document.body.getBoundingClientRect().top <= -50) //  displayed when scrolled
          {
               fullLogo.style.display = 'none';
               svgIcon.src = 'images/Icon_blue.png';
               headerSmall.style.top = '0' + 'px';


               if (mql.matches) {
                    headerSmall.style.top = '0' + 'px';
                    headerSmall.style.backgroundColor = '#ffffff';
                    headerSmall.style.color = 'black';
                    menuTop.style.color = 'black';
                    fullLogo.style.display = 'none';



               }
               else {
                    headerSmall.style.top = '92' + '%';
                    headerSmall.style.backgroundColor = '';
                    headerSmall.style.color = 'white';
                    menuTop.style.color = 'white';

               }
          }





          //top of page display
          else {
               headerSmall.style.color = 'black';
               menuTop.style.color = 'black';
               fullLogo.style.top = '';
               fullLogo.style.display = 'none';
               headerSmall.style.display = '';
               headerSmall.style.top = '';


               svgIcon.src = 'images/Icon_blue.png';

               if (mql.matches) {
                    headerSmall.style.top = '';
                    headerSmall.style.backgroundColor = '';

               }
               else {
                    headerSmall.style.top = '92' + '%';
                    headerSmall.style.backgroundColor = '';
               }




          }
     }
}




//home pagesection collapse

const sectionCollapse = document.querySelectorAll('.collapse');

window.addEventListener('scroll', function () {


     for (const section of sectionCollapse) {

          var position = section.getBoundingClientRect();

          if (sdl.matches) {

               // checking whether section top meets top window
               // max width 800px and landscape orientation
               if (position.top <= 0) {
                    section.style.height = '10vh';
                    section.querySelector(".text-block").style.paddingTop = '30vh';
                    e.currentTarget.blur();

               }

               // checking whether section bottom meets top window
               else if (position.top >= 0) {
                    section.style.height = '';
                    section.querySelector(".text-block").style.paddingTop = '';



               }

          }

          else if (sdp.matches) {


               // checking whether section top meets top window
               // all portrait orientation devices

               if (position.top <= 0) {
                    section.style.height = '100%';
                    section.querySelector(".text-block").style.paddingTop = '30vh';
               }

               // checking whether section bottom meets top window
               else if (position.top >= 0) {
                    section.style.height = '50vh';
                    section.querySelector(".text-block").style.paddingTop = '';



               }

          }

          else {
               // checking whether section top meets top window
               // all landscape orienation above 800px 

               if (position.top <= 0) {
                    section.style.height = '100%';
                    section.querySelector(".text-block").style.paddingTop = '30vh';

               }

               // checking whether section bottom meets top window
               else if (position.top >= 0) {
                    section.style.height = '20vh';
                    section.querySelector(".text-block").style.paddingTop = '';



               }
          }
     }
});







//link addding arrows

const links = document.querySelectorAll('a');
let arrow = document.createElement('p');
arrow.style.fontSize = '12px';
arrow.style.justifyContent = 'center';
arrow.style.marginLeft = '5px';
arrow.style.borderBottom = '0px';


links.forEach(link => {

     link.addEventListener('mouseenter', function () {
          arrow.innerHTML = '&rarr;';
          link.appendChild(arrow);
          link.style.display = 'flex';
          arrow.style.alignSelf = 'center';
          arrow.style.placeSelf = 'center';
          link.style.textDecoration = 'none';

     })


})

links.forEach(link => {
     link.addEventListener('mouseleave', function () {
          arrow.innerHTML = '';
          link.style.textDecoration = '';


     })

})


















function checkHeight() {

     const elem = document.querySelectorAll('.image-content > img');
     const dotActive = document.querySelectorAll('.dot');

     // console.log(elem);

     function iterate(item, index) {


          if (item.getBoundingClientRect().top <= 0 && item.getBoundingClientRect().bottom >= 0) {
               console.log(`${item} has index ${index} and ${item.getBoundingClientRect().top}`);

               dotActive[index].classList.add('active');

          }
          else {
               console.log('not in view');
               dotActive[index].classList.remove('active');

          }
     }


     elem.forEach(iterate);

}




document.onload = function () {

     //check url
     var url = window.location.href;
     console.log(url);
}









//progress bar

const pBar = document.getElementById("progressBar");


//steps and list items

//consult
const sOne = document.getElementById("stepOne");

//sourcing
const sTwo = document.getElementById("stepTwo");

//design
const sThree = document.getElementById("stepThree");

//atelier
const sFour = document.getElementById("stepFour");

//delivery
const sFive = document.getElementById("stepFive");



//process sections

const proSecOne = document.getElementById("consult");
const proSecTwo = document.getElementById("sourcing");
const proSecThree = document.getElementById("design");
const proSecFour = document.getElementById("atelier");
const proSecFive = document.getElementById("delivery");
const proSecSix = document.getElementById("fine");




//add selected class when it scrolls 

// var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//      scrollTop = window.pageYOffset || document.documentElement.scrollTop;



window.onscroll = function () {

     changeHeader();
     checkHeight();

     if (proSecOne.getBoundingClientRect().top < 0 && proSecOne.getBoundingClientRect().bottom > 0) {
          sOne.classList.add("selected");

     }

     else if (proSecTwo.getBoundingClientRect().top < 0 && proSecTwo.getBoundingClientRect().bottom > 0) {
          sTwo.classList.add("selected");
     }




     else if (proSecThree.getBoundingClientRect().top < 0 && proSecThree.getBoundingClientRect().bottom > 0) {
          sThree.classList.add("selected");
     }

     else if (proSecFour.getBoundingClientRect().top < 0 && proSecFour.getBoundingClientRect().bottom > 0) {
          sFour.classList.add("selected");
     }
     else if (proSecFive.getBoundingClientRect().top < 0 && proSecFive.getBoundingClientRect().bottom > 0) {
          sFive.classList.add("selected");
     }

     else if (proSecSix.getBoundingClientRect().top < 0 && proSecSix.getBoundingClientRect().bottom > 0) {
          pBar.style.opacity = '0';



     }


     else {
          sOne.classList.remove("selected");
          sTwo.classList.remove("selected");
          sThree.classList.remove("selected");
          sFour.classList.remove("selected");
          sFive.classList.remove("selected");
          pBar.style.opacity = '1';


     }




};
