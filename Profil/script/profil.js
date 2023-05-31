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

let btnscorequizz = document.querySelector('.btnscorequizz')
let btnscore7diff = document.querySelector('.btnscore7diff')
let btnscorejprix = document.querySelector('.btnscorejprix')
let btnscoresnake = document.querySelector('.btnscoresnake')
let btnscoreflappybird = document.querySelector('.btnscoreflappybird')
let btnscorepingpong = document.querySelector('.btnscorepingpong')

let affichscorequizz = document.querySelector('.hautscorequizz')
let affichscore7diff = document.querySelector('.hautscore7diff')
let affichscorejprix = document.querySelector('.hautscorejprix')
let affichscoresnake = document.querySelector('.hautscoresnake')
let affichscoreflappybird = document.querySelector('.hautscoreflappybird')
let affichscorepinpong = document.querySelector('.hautscorepingpong')


btnscorequizz.addEventListener('click', function(){
    btnscorequizz.classList.remove("test")
    affichscorequizz.style.display="block"

    btnscore7diff.classList.add("test")
    btnscorejprix.classList.add("test")
    btnscoresnake.classList.add("test")
    btnscoreflappybird.classList.add("test")
    btnscorepingpong.classList.add("test")

    affichscore7diff.style.display="none"
    affichscorejprix.style.display="none"
    affichscoresnake.style.display="none"
    affichscoreflappybird.style.display="none"
    affichscorepinpong.style.display="none"
})


btnscore7diff.addEventListener('click', function(){
    btnscore7diff.classList.remove("test")
    affichscore7diff.style.display="block"

    btnscorequizz.classList.add("test")
    btnscorejprix.classList.add("test")
    btnscoresnake.classList.add("test")
    btnscoreflappybird.classList.add("test")
    btnscorepingpong.classList.add("test") 
    
    affichscorequizz.style.display="none"
    affichscorejprix.style.display="none"
    affichscoresnake.style.display="none"
    affichscoreflappybird.style.display="none"
    affichscorepinpong.style.display="none"
})


btnscorejprix.addEventListener('click', function(){
    btnscorejprix.classList.remove("test")
    affichscorejprix.style.display="block"

    btnscorequizz.classList.add("test")
    btnscore7diff.classList.add("test")
    btnscoresnake.classList.add("test")
    btnscoreflappybird.classList.add("test")
    btnscorepingpong.classList.add("test")  

    affichscorequizz.style.display="none"
    affichscore7diff.style.display="none"
    affichscoresnake.style.display="none"
    affichscoreflappybird.style.display="none"
    affichscorepinpong.style.display="none"
})


btnscoresnake.addEventListener('click', function(){
    btnscoresnake.classList.remove("test")
    affichscoresnake.style.display="block"

    btnscorequizz.classList.add("test")
    btnscore7diff.classList.add("test")
    btnscorejprix.classList.add("test")
    btnscoreflappybird.classList.add("test")
    btnscorepingpong.classList.add("test")  

    affichscorequizz.style.display="none"
    affichscore7diff.style.display="none"
    affichscorejprix.style.display="none"
    affichscoreflappybird.style.display="none"
    affichscorepinpong.style.display="none"
})

btnscoreflappybird.addEventListener('click', function(){
    btnscoreflappybird.classList.remove("test")
    affichscoreflappybird.style.display="block"

    btnscorequizz.classList.add("test")
    btnscore7diff.classList.add("test")
    btnscorejprix.classList.add("test")
    btnscoresnake.classList.add("test")
    btnscorepingpong.classList.add("test")  

    affichscorequizz.style.display="none"
    affichscore7diff.style.display="none"
    affichscorejprix.style.display="none"
    affichscoresnake.style.display="none"
    affichscorepinpong.style.display="none"
})

btnscorepingpong.addEventListener('click', function(){
    btnscorepingpong.classList.remove("test")
    affichscorepinpong.style.display="block"

    btnscorequizz.classList.add("test")
    btnscore7diff.classList.add("test")
    btnscorejprix.classList.add("test")
    btnscoresnake.classList.add("test")
    btnscoreflappybird.classList.add("test") 

    affichscorequizz.style.display="none"
    affichscore7diff.style.display="none"
    affichscorejprix.style.display="none"
    affichscoresnake.style.display="none"
    affichscoreflappybird.style.display="none"

})




let closesucces = document.querySelector('.closesucces')
let messsucces = document.querySelector('.succes')

closesucces.addEventListener("click",function(){
    messsucces.style.display="none"
});

