// Обёртка

var box = document.getElementById("box");
// Блоки

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var last = document.getElementById("last");

// Линии

var firstLine = document.getElementsByClassName("line")[0];
var secondLine = document.getElementsByClassName("line")[1];

// Определние местоположения первого блока

var firstPosition = first.getBoundingClientRect().bottom + window.pageYOffset;
var firstLinePosition = firstLine.getBoundingClientRect().bottom+ window.pageYOffset;
var secondLinePosition = secondLine.getBoundingClientRect().bottom + window.pageYOffset;
var footerCords = last.getBoundingClientRect().top + window.pageYOffset;


function stickyHeader() {
  if (first.classList.contains("fixed") && window.pageYOffset < firstLinePosition) {
    first.classList.remove("fixed");
  } else if (window.pageYOffset > firstLinePosition){
    first.classList.add("fixed");
  }
}

window.addEventListener("scroll", stickyHeader);




function staticBlock() {
  if ( window.pageYOffset > secondLinePosition) {
    first.classList.add("stop");
  } else if(window.pageYOffset < secondLinePosition) {
    first.classList.remove("stop");
  }
}



window.addEventListener("scroll", staticBlock);
