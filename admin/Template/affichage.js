let btnsuppjp = document.querySelectorAll('.suppJprix')

let fcupt = document.querySelectorAll('.fcupt')
let divbtn = document.querySelectorAll('.btnElement')




console.log(btnsuppjp)
 
btnsuppjp.forEach((bouton,index) => bouton.addEventListener ("click", function(){ 
    bouton.style.display = "none"
    let confsupp = document.querySelectorAll('.confsupp')
    confsupp.forEach((btnconf,index2) => { if(index === index2){btnconf.style.display ="block"}})
    let btnupdjp = document.querySelectorAll('.UpdtJprix')
    btnupdjp.forEach((btnup, index3) => {if(index === index3){btnup.style.display="none"}})
    let numid = document.querySelectorAll('.numid')
    console.log(numid)
    console.log(typeof numid)
    numid.forEach((numero, index4) => {if (index === index4){
        let fcsupp = document.querySelectorAll('.fcsupp')
        fcsupp.forEach((fcsupp, index5) => {if(index4 === index5) {fcsupp.value = parseInt(numero.textContent)}})
    
    }})
}))




    

