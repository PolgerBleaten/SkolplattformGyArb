'use strict';

let links = document.querySelectorAll("a");
let articles = document.querySelectorAll("article");
console.log(articles);

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        articles.forEach((article) => article.classList.add("hidden"));
        document.querySelector("#" + link.getAttribute("data-linked-article")).classList.remove("hidden");    
    });
});