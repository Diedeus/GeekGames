let btn7diff = document.querySelector('#btn7diff')
let container7diff = document.querySelector('.container_update7diff')
let erreur1 = false
let erreur2 = false
let erreur3 = false
let erreur4 = false
let erreur5 = false
let erreur6 = false
let erreur7 = false 

btn7diff.addEventListener("click", function(){
    let img = "<?php echo $img; ?>"
    let lienImg = '/Jeux/SeptDiff/Asset/' + "<?php echo $_FILES['Image']['name']?>"
    const PreviImg = document.createElement('img')
    let form7diff = document.querySelector('.form7diff')
    PreviImg.src = img
    PreviImg.width = "500px"
    PreviImg.height = "500px"
    form7diff.appendChild(PreviImg)
    let formAdminDiff = document.querySelector('#formAdminDiff')
    formAdminDiff.style.display ="none"

    PreviImg.addEventListener("click", function (event) {
        let rect = imgDiff.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        const divAff = document.createElement('div')
        const Affcoor1 =document.createElement('p')
        console.log("Coordonnées du clic: x=", x, ", y=", y);
    })
})

