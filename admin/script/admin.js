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

//     let btnsupp7d = document.querySelectorAll('.supp7diff')
//     // let btnconf7d = document.querySelectorAll('.confsupp7diff')
// console.log(btnsupp7d)
//     btnsupp7d.forEach((btn7d, index7d) => btn7d.addEventListener("click", function(){
//         btn7d.style.display = "none"
//         console.log(btn7d)
//         let btnconf7d = document.querySelectorAll('.Btn7diff .confsupp7diff')[index7d];
//         console.log(btnconf7d)
//         if (btnconf7d) {
//           btnconf7d.style.display = "block";
//         }
//     }))

    // let btnsupp7d = document.querySelectorAll('.supp7diff')
    
   
    // btnsupp7d.forEach((btn7d, index7d) => btn7d.addEventListener("click", function(){
    //     btn7d.style.display = "none"
    //     let btnconf7d = document.querySelectorAll('.confsupp7diff')
    //     btnconf7d.forEach((btn7d2,index7d2) =>{ if (index7d === index7d2){
    //         btn7d2.style.display = "block"
    //         let inthidden = document.querySelectorAll('.supp7diff2')
    //         inthidden.forEach((inphid, index7d3) => { if ( index7d3 === index7d){
    //             let idimg = document.querySelectorAll('.idimg')
    //             idimg.forEach((idimag, index7d4) => { if (index7d4 === index7d){
    //                 console.log(idimag)
    //                 inphid.value = parseInt(idimag.value)
    //             }})   
    //         }})
    //     }})
    // }))