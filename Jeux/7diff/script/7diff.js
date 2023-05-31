let caseImage = document.querySelectorAll('.caseImage')

caseImage.forEach((caseImg, index) => caseImg.addEventListener("click", function(){
    caseImage.forEach((caseImg2) =>{
        caseImg2.style.border = "5px solid grey"
    })

    let idimg = document.querySelectorAll('.idimg')
    idimg.forEach((idimgSelect, index2) => { if (index === index2){
        let idSelect = document.querySelector('#idimgSelect')
        let id = parseInt(idimgSelect.value)
        idSelect.value = id
    }})

    caseImg.style.border = "5px solid blue"
}))

let idimgsub = document.querySelector('#idimgsub')
let idimgsub2 = document.querySelector('#idimgsub2')

idimgsub.addEventListener("click", function(event){
    event.preventDefault();
    
    let idimgSelect = document.querySelector('#idimgSelect')
    let idimgSelect2 = document.querySelector('#idimgSelect2')

    idimgsub.style.display ="none"
    idimgsub2.style.display = "block"
    let id2 = parseInt(idimgSelect.value)
    idimgSelect2.value = id2
})



