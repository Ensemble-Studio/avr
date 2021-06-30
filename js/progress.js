document.addEventListener("DOMContentLoaded", function (event) {

     //sections
     const oneSection = document.getElementById('test');
     const twoSection = document.getElementById('test02');
     const threeSection = document.getElementById('test03');


     //progress
     const bar = document.getElementById("progress");
     const onetag = document.getElementById("firsttag");
     const twotag = document.getElementById("twotag");
     const threetag = document.getElementById("threetag");



     var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;



     function scrollFunction() {
          if (scrollTop >= oneSection.getBoundingClientRect().top && scrollTop <= twoSection.getBoundingClientRect().top) {
               onetag.style.color = 'red';
               oneSection.style.height = '100%';
               twotag.style.color = 'black';
               threetag.style.color = 'black';


          } else if (scrollTop >= twoSection.getBoundingClientRect().top && scrollTop <= threeSection.getBoundingClientRect().top) {
               onetag.style.color = 'black';
               oneSection.style.height = '100%';


               twotag.style.color = 'red';
               twoSection.style.height = '100%';


               threetag.style.color = 'black';
               threeSection.style.height = '20%';




          } else if (scrollTop >= threeSection.getBoundingClientRect().top) {
               onetag.style.color = 'black';
               twotag.style.color = 'black';
               threetag.style.color = 'red';
               twoSection.style.height = '100%';


          } else {
               threetag.style.color = 'black';
               oneSection.style.height = '20%';
               twoSection.style.height = '20%';


               threeSection.style.height = '20%';








          }

     }


     window.onscroll = function () {
          scrollFunction()
     };
});