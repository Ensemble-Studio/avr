


// disapper logo


// show 
const headerSmall = document.getElementById('headerSmall');
const logoBig = document.getElementById('fullLogo');
function changeHeader() {
     console.log(document.body.getBoundingClientRect().top);
     if (document.body.getBoundingClientRect().top <= -350) {
          fullLogo.style.opacity = 0;
          headerSmall.style.top = 0 + 'px';



     }
     else {
          fullLogo.style.top = '';
          fullLogo.style.opacity = '';
          headerSmall.style.top = '';
          headerSmall.style.display = '';





     }
}



//sections
const oneSection = document.getElementById('test');
const twoSection = document.getElementById('test02');
const threeSection = document.getElementById('test03');


var scrollTop = window.pageYOffset || document.documentElement.scrollTop;



function scrollFunction() {
     if
          (scrollTop >= oneSection.getBoundingClientRect().top && scrollTop <= twoSection.getBoundingClientRect().top) { oneSection.style.height = '100%'; }
     else if
          (scrollTop >= twoSection.getBoundingClientRect().top && scrollTop <= threeSection.getBoundingClientRect().top) {
          oneSection.style.height = '100%';
          twoSection.style.height = '100%'
          threeSection.style.height = '25%';




     }
     else if
          (scrollTop >= threeSection.getBoundingClientRect().top) {
          threeSection.style.height = '100%';



     }

     else {
          oneSection.style.height = '25%';
          twoSection.style.height = '25%';
          threeSection.style.height = '25%';
     }

}


window.onscroll = function () {
     changeHeader(), scrollFunction();

};














