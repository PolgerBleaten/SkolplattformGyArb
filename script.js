'use strict';
let idag = document.querySelector("[data-idag]");
let vecka = document.querySelector("[data-vecka]");
let månad = document.querySelector("[data-månad]");
let links = document.querySelectorAll("a");
let articles = document.querySelectorAll("article");

console.log(articles);

idag.addEventListener("click", Idag);
vecka.addEventListener("click", Vecka);
månad.addEventListener("click", Månad);

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        articles.forEach((article) => article.classList.add("hidden"));
        document.querySelector("#" + link.getAttribute("data-linked-article")).classList.remove("hidden");    
    });
});

function Gömschema(){
    document.getElementById("lektioner").classList.add("hidden");
}

function Idag(){
    Gömschema();
}

function Vecka(){

}

function Månad(){

}