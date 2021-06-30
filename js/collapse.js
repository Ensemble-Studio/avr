
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
          threeSection.style.height = '20%';




     }
     else if
          (scrollTop >= threeSection.getBoundingClientRect().top) {
          twoSection.style.height = '100%';


     }

     else {
          oneSection.style.height = '20%';
          twoSection.style.height = '20%';
          threeSection.style.height = '20%';
     }

}


window.onscroll = function () {
     scrollFunction()
};
