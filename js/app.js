"use strict";!function(){function t(e,o,n){if(!(n<=0)){var c=o-e.scrollTop,l=c/n*2;setTimeout(function(){e.scrollTop=e.scrollTop+l,e.scrollTop!==o&&t(e,o,n-2)},2)}}var e=325,o=document.getElementById("scroll-to-block-2");o.addEventListener("click",function(n){n.preventDefault(),t(document.body,o.offsetTop,e)});var n=document.getElementById("contact_left"),c=document.getElementById("contact_right");n.addEventListener("click",function(){console.log("btn left clicked")}),c.addEventListener("click",function(){console.log("btn right clicked")});new Swiper(".swiper-container",{direction:"horizontal",loop:!0,nextButton:".slider_right_img",prevButton:".slider_left_img",scrollbar:".swiper-scrollbar"})}();