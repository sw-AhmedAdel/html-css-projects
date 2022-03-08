"use strict"
//this is for the nav
const header = document.querySelector(".header");
const btn = document.querySelector(".btn-mobile");

btn.addEventListener("click" ,function(){
  header.classList.toggle("nav-open");

});


// scroll smooth
const links = document.querySelectorAll("a:link");
links.forEach(function(link) {
  link.addEventListener("click",function(e){
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //scroll back to top
    if(href ==="#"){
      window.scrollTo({
        top:0,
        behavior:"smooth",
      });
    }

    //scrool other links 
    if(href !=="#" && href.startsWith("#")){
      //means href not just = # means it starts with # and other word
      const sectionScroolTo = document.querySelector(href);
      console.log(href);
      sectionScroolTo.scrollIntoView({behavior:"smooth"});
    }
    
    //close the mobile nav
    if(link.classList.contains("nav-link")){
      header.classList.toggle("nav-open");
    }
  })
  
})

//add stick class

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function(entries) {
   const entry =entries[0];
   console.log(entry);
   if(entry.isIntersecting === false) {
    document.body.classList.add("stikcy");
   }else {
    document.body.classList.remove("stikcy");
   }
} , {
  root:null,
  threshold:0,//means when the hero section moves out of the 
  //view port 
  rootMargin:"-80px",
})

obs.observe(sectionHero);