import * as fs from 'fs'
const path = require('path')

const dossierImages = '/Jeux/SeptDiff/Asset'

fs.readdir(dossierImages, (err, fichiers) =>{
    if (err){
        console.error("erreur lors de la lecture du dossier:", err)
        return;
    }
    
    const images = fichier.filter(fichier => {
        const extension = path.extname(fichier).toLowerCase()
        return extension === '.jpg' || extension === '.jpeg' || extension === '.png'
    })

    if(images.length > 0){
        const derniereImage = images[images.length -1]
        console.log ("Dernière Image ajoutée: ", derniereImage)
    } else {
        console.log(" Aucun image n'a été trouvée")
    }
})

let btn7diff = document.querySelector('#btn7diff')
let container7diff = document.querySelector('.container_update7diff')
let body = document.querySelector('body')
let erreur1 = false
let erreur2 = false
let erreur3 = false
let erreur4 = false
let erreur5 = false
let erreur6 = false
let erreur7 = false 
console.log('test2')

    console.log('test1')
    let img = "<?php echo $img; ?>"
    let lienImg = '/Jeux/SeptDiff/Asset/' + "<?php echo $_FILES['Image']['name']?>"
    const PreviImg = document.createElement('img')
    const form7dif = document.createElement('section')
    form7dif.className = 'form7diff'
    body.appendChild(form7dif)
    let form7diff = document.querySelector('.form7diff')
    PreviImg.className = "previImg"
    PreviImg.src = img
    PreviImg.width = "500px"
    PreviImg.height = "500px"
    form7diff.appendChild(PreviImg)
    let formAdminDiff = document.querySelector('#formAdminDiff')
    formAdminDiff.style.display ="none"
    form7diff.style.display = "flex"
    form7diff.style.flexDirection = "row"
    let donnees = document.createElement('div')
    form7diff.appendChild(donnees)
    donnees.style.display = "flex"
    donnees.style.flexDirection ="column"
    let click = 0


    PreviImg.addEventListener("click", function (event) {
        

        let rect = imgDiff.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;


        if (click === 0){

            const Err1x1 = x
            const Err1y1 = y

            const AffErr1 = document.createElement('div')
            AffErr1.style.display = "flex"
            AffErr1.style.flexDirection = "row"
            donnees.appendChild(AffErr1)

            const Affcoor1 =document.createElement('p')
            Affcoor1.textContent = "Err1x1 = " + x + "   Err1y1 = " + y
            Affcoor1.color = "red"
            Affcoor1.id = 'p1'
            AffErr1.appendChild(Affcoor1)
            click += 1

        }
        if (click === 1 ){

            const Err1x2 = x
            const Err1y2 = y

            const Affcoor2 = document.createElement('p')
            Affcoor2.textContent = "Err1x2 = " + x + "   Err1y2 = " + y
            Affcoor2.color = "red"
            Affcoor2.id = 'p2'
            AffErr1.appendChild(Affcoor2)

            let p1 = document.querySelector('#p1')

            const btnValid1 = document.createElement('button')
            btnValid1.textContent = "Valider"
            btnValid1.addEventListener("click", function(){
                    p1.style.color = "black"
                    Affcoor2.style.color = "black"
                    click += 1
                    erreur1 = true
            })

            const btnReco1 = document.createElement('button')
            btnReco1.textContent = "Recommencer"
            btnReco1.addEventListener("click", function(){
                click = 0
                p1.remove()
                let p2 = document.querySelector('#p2')
                p2.remove()

            })

        }
        if (click === 2 ){
            const Err2x1 = x
            const Err2y1 = y

            const AffErr2 = document.createElement('div')
            AffErr2.style.display = "flex"
            AffErr2.style.flexDirection = "row"
            donnees.appendChild(AffErr2)

            const Affcoor3 =document.createElement('p')
            Affcoor3.textContent = "Err2x1 = " + x + "   Err2y1 = " + y
            Affcoor3.color = "red"
            Affcoor3.id = 'p3'
            AffErr2.appendChild(Affcoor3)
            click += 1
        }
        if(click === 3){
            const Err2x2 = x
            const Err2y2 = y

            const Affcoor4 = document.createElement('p')
            Affcoor4.textContent = "Err1x2 = " + x + "   Err1y2 = " + y
            Affcoor4.color = "red"
            Affcoor4.id = 'p4'
            AffErr2.appendChild(Affcoor4)

            let p3 = document.querySelector('#p3')

            const btnValid2 = document.createElement('button')
            btnValid2.textContent = "Valider"
            btnValid2.addEventListener("click", function(){
                    p3.style.color = "black"
                    Affcoor4.style.color = "black"
                    click += 1
                    erreur2 = true
            })

            const btnReco2 = document.createElement('button')
            btnReco2.textContent = "Recommencer"
            btnReco2.addEventListener("click", function(){
                click = 2
                p3.remove()
                let p4 = document.querySelector('#p4')
                p4.remove()
            
            })
        }
    })


