'use strict';
let idag = document.querySelector("[data-idag]");
let vecka = document.querySelector("[data-vecka]");
let månad = document.querySelector("[data-månad]");
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
var h;
var e;
var f;
var t;
var darkmodeactive = false;
const firstDate = new Date();
const secondDate = new Date(Date.now() + 1000000000);
const calendar = new dhx.Calendar("kalender", {
    css: "dhx_widget--bordered",
    value: [firstDate, secondDate]
});
Gömkalender();
hälsinfo[3].style.display = "none";
console.log(articles);
var sidebar = document.getElementById("sidebar");


Bläddravänster();
right.addEventListener("click", Bläddrahöger)
hälsavänster.addEventListener("click", Bläddravänster)

idag.addEventListener("click", Idag);
vecka.addEventListener("click", Vecka);
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
    darkmodeimage.src = "Images/lightmode.png";
    document.querySelectorAll("div.genomskinligBakgrund div, #ämnen h4").forEach(element => {
        element.style.backgroundColor = "rgba(80, 80, 80, 0.692)";
    });
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
    document.querySelectorAll("div.genomskinligBakgrund div, #ämnen h4").forEach(element => {
        element.style.backgroundColor = "rgba(223, 219, 219, 0.692)";
    });
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
function RemoveColorOfButtons(){
    document.getElementById("idag").style.backgroundColor = "white";
    document.getElementById("vecka").style.backgroundColor = "white";
    document.getElementById("månad").style.backgroundColor = "white";
}
function GömNav(){
    sidebar.style.display = "none";
}
function VisaNav(){
    sidebar.style.display = "flex";
}
function Idag(){
    RemoveColorOfButtons();
    Gömkalender();
    Visaschema();
    document.getElementById("idag").style.backgroundColor = "green";
}

function Vecka(){
    RemoveColorOfButtons();
    document.getElementById("vecka").style.backgroundColor = "green";
}

function Månad(){
    RemoveColorOfButtons();
    Gömschema();
    Visakalender();
    document.getElementById("månad").style.backgroundColor = "green";
}