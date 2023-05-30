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

btnscore7diff.addEventListener('click', function(){
    btnscore7diff.setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
    btnscore7diff.style.filter="grayscale(0%)"
    btnscorepingpong.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoreflappybird.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorejprix.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorequizz.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoresnake.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorepingpong.filter="grayscale(0%)"
    btnscoreflappybird.filter="grayscale(0%)"
    btnscorejprix.filter="grayscale(0%)"
    btnscorequizz.filter="grayscale(0%)"
    btnscoresnake.filter="grayscale(0%)"
})

btnscorequizz.addEventListener('click', function(){
    btnscorequizz.setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
    btnscorequizz.style.filter="grayscale(0%)"
    btnscorepingpong.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoreflappybird.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorejprix.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscore7diff.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoresnake.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorepingpong.filter="grayscale(0%)"
    btnscoreflappybird.filter="grayscale(0%)"
    btnscorejprix.filter="grayscale(0%)"
    btnscore7diff.filter="grayscale(0%)"
    btnscoresnake.filter="grayscale(0%)"
})

btnscorejprix.addEventListener('click', function(){
    btnscorejprix.setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
    btnscorejprix.style.filter="grayscale(0%)"
    btnscorepingpong.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoreflappybird.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorequizz.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscore7diff.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoresnake.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorepingpong.filter="grayscale(0%)"
    btnscoreflappybird.filter="grayscale(0%)"
    btnscorequizz.filter="grayscale(0%)"
    btnscore7diff.filter="grayscale(0%)"
    btnscoresnake.filter="grayscale(0%)"
})
btnscoresnake.addEventListener('click', function(){
    btnscoresnake.setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
    btnscoresnake.style.filter="grayscale(0%)"
    btnscorepingpong.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoreflappybird.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorequizz.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscore7diff.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorejprix.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorepingpong.filter="grayscale(0%)"
    btnscoreflappybird.filter="grayscale(0%)"
    btnscorequizz.filter="grayscale(0%)"
    btnscore7diff.filter="grayscale(0%)"
    btnscorejprix.filter="grayscale(0%)"
})

btnscoreflappybird.addEventListener('click', function(){
    btnscoreflappybird.setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
    btnscoreflappybird.style.filter="grayscale(0%)"
    btnscorepingpong.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoresnake.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorequizz.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscore7diff.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorejprix.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorepingpong.filter="grayscale(0%)"
    btnscoresnake.filter="grayscale(0%)"
    btnscorequizz.filter="grayscale(0%)"
    btnscore7diff.filter="grayscale(0%)"
    btnscorejprix.filter="grayscale(0%)"
})

btnscorepingpong.addEventListener('click', function(){
    btnscorepingpong.setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
    btnscorepingpong.style.filter="grayscale(0%)"
    btnscoreflappybird.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoresnake.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorequizz.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscore7diff.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscorejprix.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)")
    btnscoreflappybird.filter="grayscale(0%)"
    btnscoresnake.filter="grayscale(0%)"
    btnscorequizz.filter="grayscale(0%)"
    btnscore7diff.filter="grayscale(0%)"
    btnscorejprix.filter="grayscale(0%)"
})




let closesucces = document.querySelector('.closesucces')
let messsucces = document.querySelector('.succes')

closesucces.addEventListener("click",function(){
    messsucces.style.display="none"
});

