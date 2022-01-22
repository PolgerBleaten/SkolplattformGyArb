'use strict';
let idag = document.querySelector("[data-idag]");
let månad = document.querySelector("[data-månad]");
let vecka = document.querySelector("[data-vecka]");
let links = document.querySelectorAll("a");
let articles = document.querySelectorAll("article");
let start = document.querySelector("[data-start]");
let profil = document.querySelector("[data-profil]");
let info = document.querySelector("[data-info]");
let right = document.querySelector("[data-hälsahöger]");
let hälsavänster = document.querySelector("[data-hälsavänster]");
let hälsinfo = [document.getElementById("hälsinfo1"), document.getElementById("hälsinfo2"), document.getElementById("hälsinfo3"), document.getElementById("hälsinfo4")]
let slinfo = document.getElementById("tutorial");
let slpil = document.getElementById("slpil");
let darkmodebutton = document.getElementById("darkmode");
let darkmodeimage = document.getElementById("darkmodeimage");
let kalender = document.getElementById("kalender");
let lektioner = document.getElementById("lektioner");
let veckaschema = document.getElementById("veckaschema");
var h;
var e;
var f;
var t;
var darkmodeactive = false;
var idagaktiv = true;
var månadaktiv = false;
var veckaaktiv = false;
const firstDate = new Date();
const secondDate = new Date(Date.now() + 1000000000);
const calendar = new dhx.Calendar("kalender", {
    css: "dhx_widget--bordered",
    value: [firstDate, secondDate]
});
Gömkalender();
Gömvecka();
hälsinfo[3].style.display = "none";
console.log(articles);
var sidebar = document.getElementById("sidebar");

Betyg();

Bläddravänster();
right.addEventListener("click", Bläddrahöger)
hälsavänster.addEventListener("click", Bläddravänster)

vecka.addEventListener("click", Vecka);
idag.addEventListener("click", Idag);
månad.addEventListener("click", Månad);

start.addEventListener("click", VisaNav);
info.addEventListener("click", GömNav);
profil.addEventListener("click", GömNav);

slpil.addEventListener("click", VisaSl)
darkmodebutton.addEventListener("click", changelight);

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        articles.forEach((article) => article.classList.add("hidden"));
        document.querySelector("#" + link.getAttribute("data-linked-article")).classList.remove("hidden");
    });
});

slinfo.style.display = "none";
function VisaSl() {
    if(slinfo.style.display == "none"){
        slinfo.style.display = "block";
        slpil.style.transform = "rotate(90deg)";
    }
    else{
        slpil.style.transform = "rotate(-90deg)";
        slinfo.style.display = "none";
    }
}

function Betyg() {
    document.querySelectorAll("td").forEach(element =>{
        if (element.innerHTML == "F") {
            element.style.color = "crimson"            
        }
        else if (element.innerHTML == "E") {
            element.style.color = "lightcoral"            
        }
        else if (element.innerHTML == "D") {
            element.style.color = "orange"            
        }
        else if (element.innerHTML == "C") {
            element.style.color = "yellowgreen"            
        }
        else if (element.innerHTML == "B") {
            element.style.color = "lawngreen"            
        }
        else if (element.innerHTML == "A") {
            element.style.color = "limegreen"            
        }
        else if (element.innerHTML == "Visa"){
            element.classList.add("Visa");
        }
    })
}

function changelight() {
    if(darkmodeactive){
        lightmode();
    }
    else{
        darkmode();
    }
}

function darkmode() {
    darkmodeactive = true;
    document.querySelectorAll("button").forEach(element =>{
        element.style.color = "rgb(199, 175, 175)";
    });
    darkmodeimage.src = "Images/lightmode.png";
    document.querySelectorAll("div.genomskinligBakgrund div, #ämnen h4, .kurser tbody tr:nth-last-of-type(even), .nyheter tbody tr:nth-last-of-type(even), #sidebar").forEach(element => {
        element.style.backgroundColor = "rgba(80, 80, 80, 0.692)";
    });
    if(idagaktiv){
        idag.style.background = "linear-gradient(90deg, #0f0014 0%,#08285c 0%,#008a43 100%)";
        månad.style.background = "rgb(56, 56, 56)";
        månad.style.background = "rgb(56, 56, 56)";
    }
    else if(veckaaktiv){
        vecka.style.background = "linear-gradient(90deg, #0f0014 0%,#08285c 0%,#008a43 100%)";
        idag.style.background = "rgb(56, 56, 56)";
        månad.style.background = "rgb(56, 56, 56)";
    }
    else{
        månad.style.background = "linear-gradient(90deg, #0f0014 0%,#08285c 0%,#008a43 100%)";
        idag.style.background = "rgb(56, 56, 56)";
        vecka.style.background = "rgb(56, 56, 56)";
    }
    document.getElementById("skolInfo").classList.add("skolinfo2");
    document.getElementById("skolInfo").classList.remove("skolinfo");
    document.querySelector("main").classList.add("svartbakgrund");
    document.getElementById("matkort").classList.add("matkort2");
    document.getElementById("matkort").classList.remove("matkort")
    for(const t of document.getElementsByClassName("kort")) {
        t.style.filter = "brightness(60%)"
        t.style.color = "black"
        if(t == document.getElementsByClassName("kort")[2]){
            t.style.color = "white"
        }
    }
}

function lightmode() {
    darkmodeactive = false;
    document.querySelectorAll("div.genomskinligBakgrund div, #ämnen h4, .kurser tbody tr:nth-last-of-type(even), .nyheter tbody tr:nth-last-of-type(even), #sidebar").forEach(element => {
        element.style.backgroundColor = "rgba(223, 219, 219, 0.692)";
    });
    document.querySelectorAll("button").forEach(element =>{
        element.style.color = "black";
    });
    if (idagaktiv) {
        idag.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,168,153,1) 0%, rgba(61,255,0,1) 100%)";
        månad.style.background = "white";
        vecka.style.background = "white";
    }
    else if(veckaaktiv){
        vecka.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,168,153,1) 0%, rgba(61,255,0,1) 100%)";
        månad.style.background = "white";
        idag.style.background = "white";
    }
    else{
        månad.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,168,153,1) 0%, rgba(61,255,0,1) 100%)";
        idag.style.background = "white";
        vecka.style.background = "white";
    }
    document.getElementById("skolInfo").classList.add("skolinfo");
    document.getElementById("skolInfo").classList.remove("skolinfo2");
    darkmodeimage.src = "Images/halvmåne.png";
    document.querySelector("main").classList.remove("svartbakgrund");
    document.getElementById("matkort").classList.remove("matkort2");
    document.getElementById("matkort").classList.add("matkort")
    for(const t of document.getElementsByClassName("kort")) {
        t.style.filter = "none"
        t.style.color = "none"
        if(t == document.getElementsByClassName("kort")[2]){
            t.style.color = "black"
        }
    }
}

function Bläddravänster(){
    h = hälsinfo[3];
    e = hälsinfo[2];
    f = hälsinfo[1];
    t = hälsinfo[0];
    hälsinfo[3] = t;
    hälsinfo[2] = h;
    hälsinfo[1] = e;
    hälsinfo[0] = f;
 
    hälsinfo[0].style.display = "initial";
    hälsinfo[0].style.gridColumn = "2/2";
    hälsinfo[1].style.gridColumn = "3/3";
    hälsinfo[2].style.display = "initial";
    hälsinfo[2].style.gridColumn = "4/4";
    hälsinfo[3].style.display = "none";
}
function Bläddrahöger(){
    h = hälsinfo[3];
    e = hälsinfo[2];
    f = hälsinfo[1];
    t = hälsinfo[0];
    hälsinfo[3] = e;
    hälsinfo[2] = f;
    hälsinfo[1] = t;
    hälsinfo[0] = h;
 

    hälsinfo[0].style.display = "initial";
    hälsinfo[0].style.gridColumn = "2/2";
    hälsinfo[1].style.gridColumn = "3/3";
    hälsinfo[2].style.display = "initial";
    hälsinfo[2].style.gridColumn = "4/4";
    hälsinfo[3].style.display = "none";
}

function Gömvecka() {
    veckaschema.classList.add("hidden");
}
function  Visavecka() {
    veckaschema.classList.remove("hidden");
}

function Gömkalender(){
    kalender.classList.add("hidden");
}

function Visakalender(){
    kalender.classList.remove("hidden");
}

function Visaschema(){
    lektioner.classList.remove("hidden");
}

function Gömschema(){
    lektioner.classList.add("hidden");
}
function RemoveColorOfButtons(){
    if (!darkmodeactive) {
        idag.style.background = "white";
        månad.style.background = "white";
        vecka.style.background = "white";
    }
    else{
        idag.style.background = "rgb(56, 56, 56)";
        månad.style.background = "rgb(56, 56, 56)";
        vecka.style.background = "rgb(56, 56, 56)";
    }
}
function GömNav(){
    sidebar.style.display = "none";
}
function VisaNav(){
    sidebar.style.display = "flex";
}
function Idag(){
    idagaktiv = true;
    veckaaktiv = false;
    månadaktiv = false;
    RemoveColorOfButtons();
    Gömkalender();
    Gömvecka();
    Visaschema();
    if (darkmodeactive) {
        idag.style.background = "linear-gradient(90deg, #0f0014 0%,#08285c 0%,#008a43 100%)";
    }
    else{
        idag.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,168,153,1) 0%, rgba(61,255,0,1) 100%)";
    }
}

function Vecka() {
    idagaktiv = false;
    veckaaktiv = true;
    månadaktiv = false;    
    RemoveColorOfButtons();
    Gömkalender();
    Gömschema();
    Visavecka();
    if (darkmodeactive) {
        vecka.style.background = "linear-gradient(90deg, #0f0014 0%,#08285c 0%,#008a43 100%)";
    }
    else{
        vecka.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,168,153,1) 0%, rgba(61,255,0,1) 100%)";
    }
}

function Månad(){
    idagaktiv = false;
    veckaaktiv = false;
    månadaktiv = true;
    RemoveColorOfButtons();
    Gömschema();
    Gömvecka();
    Visakalender();
    if (darkmodeactive) {
        månad.style.background = "linear-gradient(90deg, #0f0014 0%,#08285c 0%,#008a43 100%)";
    }
    else{
        månad.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,168,153,1) 0%, rgba(61,255,0,1) 100%)";
    }
}