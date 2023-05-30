let btnupdate = document.querySelector('.modif')
let formupdate = document.querySelector('.formupdate_profil')
let closeupdate = document.querySelector('.closeformupdate')

btnupdate.addEventListener("click",function(){
    formupdate.style.display="flex"
})
closeupdate.addEventListener("click",function(){
    formupdate.style.display= "none"
})

let opensuppr = document.querySelector('.supprcompte')
let closesuppr = document.querySelector('.closesuppr')
let suppression = document.querySelector('.suppression')

opensuppr.addEventListener("click", function(){
    suppression.style.display="flex"
})
closesuppr.addEventListener("click", function(){
    suppression.style.display="none"
})

let closesucces = document.querySelector('.closesucces')
let messsucces = document.querySelector('.succes')

closesucces.addEventListener("click",function(){
    messsucces.style.display="none"
});

