
exports.progressBarFile = function () {

     //progress bar

     const bar = document.getElementById("progressBar");


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




     //add selected class when it scrolls 

     var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;



     window.onscroll = function () {

          if (scrollTop >= proSecOne.getBoundingClientRect().top && scrollTop <= proSecOne.getBoundingClientRect().top) {
               sOne.classList.add("selected");
          }

          else if (scrollTop >= proSecTwo.getBoundingClientRect().top && scrollTop <= proSecTwo.getBoundingClientRect().top) {
               sOne.classList.remove("selected");
               sTwo.classList.add("selected");


          }

          else {
               sOne.classList.remove("selected");
               sTwo.classList.remove("selected");

          }




     };
};