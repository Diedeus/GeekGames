let btnupdate = document.querySelector('.modif')
let formupdate = document.querySelector('.formupdate_profil')
let closeupdate = document.querySelector('.closeformupdate')

btnupdate.addEventListener("click",function(){
    formupdate.style.display="flex"
})
closeupdate.addEventListener("click",function(){
    formupdate.style.display= "none"
})

let closesucces = document.querySelector('.closesucces')
let messsucces = document.querySelector('.succes')

closesucces.addEventListener("click",function(){
    messsucces.style.display="none"
})

let closeerror = document.querySelector('.closeerror')
let messserror = document.querySelector('.error')

closeerror.addEventListener("click",function(){
    messserror.style.display="none"
})