'use strict';
let idag = document.querySelector("[data-idag]");
let vecka = document.querySelector("[data-vecka]");
let månad = document.querySelector("[data-månad]");
let links = document.querySelectorAll("a");
let articles = document.querySelectorAll("article");
const firstDate = new Date();
const secondDate = new Date(Date.now() + 1000000000);
const calendar = new dhx.Calendar("kalender", {
    css: "dhx_widget--bordered",
    value: [firstDate, secondDate]
});
Gömkalender();
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

function Gömkalender(){
    document.getElementById("kalender").classList.add("hidden");
}

function Visakalender(){
    document.getElementById("kalender").classList.remove("hidden");
}

function Visaschema(){
    document.getElementById("lektioner").classList.remove("hidden");
}

function Gömschema(){
    document.getElementById("lektioner").classList.add("hidden");
}

function Idag(){
    Gömkalender();
    Visaschema();
}

function Vecka(){

}

function Månad(){
    Gömschema();
    Visakalender();
}