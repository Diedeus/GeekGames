let updateuser = document.querySelector('.selectuser')
let updatequizz = document.querySelector('.selectquizz')
let update7diff = document.querySelector('.select7diff')
let updatejusteprix = document.querySelector('.selectjusteprix')

let sectionuser = document.querySelector('.container_updateuser')
let sectionquizz = document.querySelector('.container_quizzgeek')
let section7diff = document.querySelector('.container_update7diff')
let sectionjusteprix = document.querySelector('.container_updatejusteprix')


updateuser.addEventListener("click", function () {
    sectionuser.style.display ="block";
    sectionquizz.style.display="none";
    section7diff.style.display="none";
    sectionjusteprix.style.display="none";
});
updatequizz.addEventListener("click", function () {
    sectionquizz.style.display ="block";
    sectionuser.style.display="none";
    section7diff.style.display="none";
    sectionjusteprix.style.display="none";
});
update7diff.addEventListener("click", function () {
    section7diff.style.display ="block";
    sectionquizz.style.display="none";
    sectionuser.style.display="none";
    sectionjusteprix.style.display="none";
});
updatejusteprix.addEventListener("click", function () {
    sectionjusteprix.style.display ="block";
    sectionquizz.style.display="none";
    section7diff.style.display="none";
    sectionuser.style.display="none";
});

let btnsuppjp = document.querySelectorAll('.suppJprix')

let fcupt = document.querySelectorAll('.fcupt')
let divbtn = document.querySelectorAll('.btnElement')

let btnupdjp = document.querySelectorAll('.UpdtJprix')


console.log(btnsuppjp)
 
btnsuppjp.forEach((bouton,index) => bouton.addEventListener ("click", function(){ 
    bouton.style.display = "none"
    let confsupp = document.querySelectorAll('.confsupp')
    confsupp.forEach((btnconf,index2) => { if(index === index2){btnconf.style.display ="block"}})
    btnupdjp.forEach((btnup, index3) => {if(index === index3){
        btnup.style.display="none"
        
    }})
    let numid = document.querySelectorAll('.numid')
    numid.forEach((numero, index4) => {if (index === index4){
        let fcsupp = document.querySelectorAll('.fcsupp')
        fcsupp.forEach((fcsupp, index5) => {if(index4 === index5) {fcsupp.value = parseInt(numero.textContent)}})
    
    }})
}))

btnupdjp.forEach((bouton2, index8) => bouton2.addEventListener("click", function(){
        bouton2.style.display = "none"
        btnsuppjp.forEach((bouton,index) => { if( index === index8){bouton.style.display = "none"}}) 
        let modprix  = document.querySelectorAll('.modprix')
        modprix.forEach((inpprix, index6) => { if( index8 === index6){inpprix.style.display = "block";}})
        let modbtn = document.querySelectorAll('.modbtn2')
        modbtn.forEach((btnmod, index7 ) => { if( index8 === index7){btnmod.style.display = "block";}})
        let numid = document.querySelectorAll('.numid')
        numid.forEach((numero, index10) => {if (index10 === index8){
            let fcupp = document.querySelectorAll('.fcupp')
            fcupp.forEach((idval,index9) => { if( index10 === index9 ){idval.value = parseInt(numero.textContent)}})
        }})
    }))