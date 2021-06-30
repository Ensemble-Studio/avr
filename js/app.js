
// why use vue anyway... sigh......
const app = new Vue({

     el: '#app',
     data: {
          color: 'blue',
          titleBlock: 'titleblock',
          arrow: '->',
          hover: false,
          letterSpacing: 'letterspacing'

     }



});




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


// scroll height is the top of page
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


// media queries
var mql = window.matchMedia('(orientation: landscape)');
var sdl = window.matchMedia('(max-width: 800px) and (orientation: landscape)');
var sdp = window.matchMedia('(orientation: portrait)');



// function for header change on scroll

function changeHeader() {



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
               headerSmall.style.top = '90' + '%';
               headerSmall.style.backgroundColor = '';
          }




     }
}


window.onscroll = function () {
     changeHeader();

};



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
          arrow.innerHTML = '->';
          link.appendChild(arrow);
          link.style.display = 'flex';
          arrow.style.alignSelf = 'center';
          link.style.textDecoration = 'none';

     })


})

links.forEach(link => {
     link.addEventListener('mouseleave', function () {
          arrow.innerHTML = '';
          link.style.textDecoration = '';


     })

})









