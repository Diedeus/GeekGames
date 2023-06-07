
console.log(urlImg)






let btn7diff = document.querySelector('#btn7diff')

let erreur1 = false
let erreur2 = false
let erreur3 = false
let erreur4 = false
let erreur5 = false
let erreur6 = false
let erreur7 = false 

    let section7diff2 =document.querySelector('.container_update7diff')
    
    const CreateJson = document.createElement('div')
    CreateJson.className = 'CreateJson'
    section7diff2.appendChild(CreateJson)
    CreateJson.style.display = "flex"
    CreateJson.style.flexDirection = "row"
    
    let form7diff = document.querySelector('.form7diff')
    
    const PreviImg = document.createElement('img')
    PreviImg.className = "previImg"
    PreviImg.src = urlImg
    PreviImg.style.width = "500px"
    PreviImg.style.height = "500px"
    CreateJson.appendChild(PreviImg)
    
    let formAdminDiff = document.querySelector('#formAdminDiff')
    formAdminDiff.style.display ="none"
    
    const donnees = document.createElement('div')
    CreateJson.appendChild(donnees)
    donnees.style.display = "flex"
    donnees.style.flexDirection ="column"
    donnees.className = 'donnees'

    let click = 0

    const AffiErr1 = document.createElement('div')
    AffiErr1.className = 'AffErr1'
    AffiErr1.style.display = "flex"
    AffiErr1.style.flexDirection = "row"
    donnees.appendChild(AffiErr1)
    let AffErr1 = document.querySelector('.AffErr1')

    
    const AffiErr2 = document.createElement('div')
    AffiErr2.style.display = "flex"
    AffiErr2.style.flexDirection = "row"
    AffiErr2.className = 'AffErr2'
    donnees.appendChild(AffiErr2)
    let AffErr2 = document.querySelector('.AffErr2')

    const AffiErr3 = document.createElement('div')
    AffiErr3.style.display = "flex"
    AffiErr3.style.flexDirection = "row"
    AffiErr3.className = 'AffErr3'
    donnees.appendChild(AffiErr3)
    let AffErr3 = document.querySelector('.AffErr3')

    const AffiErr4 = document.createElement('div')
    AffiErr4.style.display = "flex"
    AffiErr4.style.flexDirection = "row"
    AffiErr4.className = 'AffErr4'
    donnees.appendChild(AffiErr4)
    let AffErr4 = document.querySelector('.AffErr4')

    const AffiErr5 = document.createElement('div')
    AffiErr5.style.display = "flex"
    AffiErr5.style.flexDirection = "row"
    AffiErr5.className = 'AffErr5'
    donnees.appendChild(AffiErr5)
    let AffErr5 = document.querySelector('.AffErr5')

    const AffiErr6 = document.createElement('div')
    AffiErr6.style.display = "flex"
    AffiErr6.style.flexDirection = "row"
    AffiErr6.className = 'AffErr6'
    donnees.appendChild(AffiErr6)
    let AffErr6 = document.querySelector('.AffErr6')

    const AffiErr7 = document.createElement('div')
    AffiErr7.style.display = "flex"
    AffiErr7.style.flexDirection = "row"
    AffiErr7.className = 'AffErr7'
    donnees.appendChild(AffiErr7)
    let AffErr7 = document.querySelector('.AffErr7')

    PreviImg.addEventListener("click", function (event) {

        console.log( 'Avant le if, click = ' + click)

        let rect = PreviImg.getBoundingClientRect();
        let x = parseInt(event.clientX - rect.left)
        let y = parseInt(event.clientY - rect.top)


        
        if (click === 0){

            const in1 = document.createElement('input')
            in1.type = 'hidden'
            in1.value = x 

            const in2 = document.createElement('input')
            in2.type = 'hidden'
            in2.value = y
            

            const Affcoor1 =document.createElement('p')
            Affcoor1.textContent = "Err1x1 = " + x + "   Err1y1 = " + y
            Affcoor1.style.color = "red"
            Affcoor1.id = 'p1'
            AffErr1.appendChild(Affcoor1)
          
        }
        if (click === 1 ){

            const Err1x2 = x
            const Err1y2 = y

            const Affcoor2 = document.createElement('p')
            Affcoor2.textContent = "Err1x2 = " + x + "   Err1y2 = " + y
            Affcoor2.style.color = "red"
            Affcoor2.id = 'p2'
            AffErr1.appendChild(Affcoor2)

            let p1 = document.querySelector('#p1')
            let p2 = document.querySelector('#p2')

            const btnValid1 = document.createElement('button')
            btnValid1.textContent = "Valider"
            btnValid1.className = 'btnVal1'
            AffErr1.appendChild(btnValid1)
            let btnVal1 = document.querySelector('.btnVal1')

            btnVal1.addEventListener("click", function(){
                    p1.style.color = "black"
                    Affcoor2.style.color = "black"
                    erreur1 = true
                    btnVal1.remove()
                    btnReco1.remove()
            })

            const btnRecom1 = document.createElement('button')
            btnRecom1.textContent = "Recommencer"
            btnRecom1.className = 'btnReco1'
            AffErr1.appendChild(btnRecom1)
            let btnReco1 = document.querySelector('.btnReco1')

            btnReco1.addEventListener("click", function(){
                click = 0
                p1.remove()
                p2.remove()
                btnVal1.remove()
                btnReco1.remove()

            })

        }
        if (click === 2  && erreur1 === true){
            
            const Err2x1 = x
            const Err2y1 = y

            const Affcoor3 =document.createElement('p')
            Affcoor3.textContent = "Err2x1 = " + x + "   Err2y1 = " + y
            Affcoor3.style.color = "red"
            Affcoor3.id = 'p3'
            AffErr2.appendChild(Affcoor3)

            

        }
        if(click === 3){

            const Err2x2 = x
            const Err2y2 = y

            const Affcoor4 = document.createElement('p')
            Affcoor4.textContent = "Err1x2 = " + x + "   Err1y2 = " + y
            Affcoor4.style.color = "red"
            Affcoor4.id = 'p4'
            AffErr2.appendChild(Affcoor4)

            let p3 = document.querySelector('#p3')
            let p4 = document.querySelector('#p4')

            const btnValid2 = document.createElement('button')
            btnValid2.textContent = "Valider"
            btnValid2.className = 'btnVal2'
            AffErr2.appendChild(btnValid2)
            let btnVal2 = document.querySelector('.btnVal2')


            btnVal2.addEventListener("click", function(){

                    p3.style.color = "black"
                    p4.style.color = "black"
                    
                    erreur2 = true
                    btnVal2.remove()
                    btnReco2.remove()

            })

            const btnRecom2 = document.createElement('button')
            btnRecom2.textContent = "Recommencer"
            btnRecom2.className= 'btnReco2'
            AffErr2.appendChild(btnRecom2)
            let btnReco2 = document.querySelector('.btnReco2')

            btnReco2.addEventListener("click", function(){

                click = 2
                
                p3.remove()
                p4.remove()
                btnVal2.remove()
                btnReco2.remove()
            
            })
        } 
        if (click === 4 && erreur2 === true ){
            
            const Err3x1 = x
            const Err3y1 = y

            const Affcoor5 = document.createElement('p')
            Affcoor5.textContent = "Err3x1 = " + x + "   Err3y1 = " + y
            Affcoor5.style.color = "red"
            Affcoor5.id = 'p5'
            AffErr3.appendChild(Affcoor5)

            

        }
        if (click === 5){

            const Err3x2 = x
            const Err3y2 = y

            const Affcoor6 = document.createElement('p')
            Affcoor6.textContent = "Err3x2 = " + x + "   Err3y2 = " + y
            Affcoor6.style.color = "red"
            Affcoor6.id = 'p6'
            AffErr3.appendChild(Affcoor6)

            let p5 = document.querySelector('#p5')
            let p6 = document.querySelector('#p6')

            const btnValid3 = document.createElement('button')
            btnValid3.textContent = "Valider"
            btnValid3.className = 'btnVal3'
            AffErr3.appendChild(btnValid3)
            let btnVal3 = document.querySelector('.btnVal3')


            btnVal3.addEventListener("click", function(){

                    p5.style.color = "black"
                    p6.style.color = "black"
                    
                    erreur3 = true
                    btnVal3.remove()
                    btnReco3.remove()

            })

            const btnRecom3 = document.createElement('button')
            btnRecom3.textContent = "Recommencer"
            btnRecom3.className= 'btnReco3'
            AffErr3.appendChild(btnRecom3)
            let btnReco3 = document.querySelector('.btnReco3')

            btnReco3.addEventListener("click", function(){

                click = 4
                
                p5.remove()
                p6.remove()
                btnVal3.remove()
                btnReco3.remove()
            
            })
        }        
         if (click === 6 && erreur3 === true){
            
            const Err4x1 = x
            const Err4y1 = y

            const Affcoor7 = document.createElement('p')
            Affcoor7.textContent = "Err4x1 = " + x + "   Err4y1 = " + y
            Affcoor7.style.color = "red"
            Affcoor7.id = 'p7'
            AffErr4.appendChild(Affcoor7)

            

        }
        if(click === 7){

            const Err4x2 = x
            const Err4y2 = y

            const Affcoor8 = document.createElement('p')
            Affcoor8.textContent = "Err4x2 = " + x + "   Err4y2 = " + y
            Affcoor8.style.color = "red"
            Affcoor8.id = 'p8'
            AffErr4.appendChild(Affcoor8)

            let p7 = document.querySelector('#p7')
            let p8 = document.querySelector('#p8')

            const btnValid4 = document.createElement('button')
            btnValid4.textContent = "Valider"
            btnValid4.className = 'btnVal4'
            AffErr4.appendChild(btnValid4)
            let btnVal4 = document.querySelector('.btnVal4')


            btnVal4.addEventListener("click", function(){

                    p7.style.color = "black"
                    p8.style.color = "black"
                   
                    erreur4 = true
                    btnVal4.remove()
                    btnReco4.remove()

            })

            const btnRecom4 = document.createElement('button')
            btnRecom4.textContent = "Recommencer"
            btnRecom4.className= 'btnReco4'
            AffErr4.appendChild(btnRecom4)
            let btnReco4 = document.querySelector('.btnReco4')

            btnReco4.addEventListener("click", function(){

                click = 6
                
                p7.remove()
                p8.remove()
                btnVal4.remove()
                btnReco4.remove()
            
            })
        }        if (click === 8 && erreur4 === true ){
            
            const Err5x1 = x
            const Err5y1 = y

            const Affcoor9 = document.createElement('p')
            Affcoor9.textContent = "Err5x1 = " + x + "   Err5y1 = " + y
            Affcoor9.style.color = "red"
            Affcoor9.id = 'p9'
            AffErr5.appendChild(Affcoor9)

            

        }
        if(click === 9){

            const Err5x2 = x
            const Err5y2 = y

            const Affcoor10 = document.createElement('p')
            Affcoor10.textContent = "Err5x2 = " + x + "   Err5y2 = " + y
            Affcoor10.style.color = "red"
            Affcoor10.id = 'p10'
            AffErr5.appendChild(Affcoor10)

            let p9 = document.querySelector('#p9')
            let p10 = document.querySelector('#p10')

            const btnValid5 = document.createElement('button')
            btnValid5.textContent = "Valider"
            btnValid5.className = 'btnVal5'
            AffErr5.appendChild(btnValid5)
            let btnVal5 = document.querySelector('.btnVal5')


            btnVal5.addEventListener("click", function(){

                    p9.style.color = "black"
                    p10.style.color = "black"
                   
                    erreur5 = true
                    btnVal5.remove()
                    btnReco5.remove()

            })

            const btnRecom5 = document.createElement('button')
            btnRecom5.textContent = "Recommencer"
            btnRecom5.className= 'btnReco5'
            AffErr5.appendChild(btnRecom5)
            let btnReco5 = document.querySelector('.btnReco5')

            btnReco5.addEventListener("click", function(){

                click = 8
                
                p9.remove()
                p10.remove()
                btnVal5.remove()
                btnReco5.remove()
            
            })
        }
        if (click === 10 && erreur5 === true ){
            
            const Err6x1 = x
            const Err6y1 = y

            const Affcoor11 = document.createElement('p')
            Affcoor11.textContent = "Err6x1 = " + x + "   Err6y1 = " + y
            Affcoor11.style.color = "red"
            Affcoor11.id = 'p11'
            AffErr6.appendChild(Affcoor11)

            

        }
        if(click === 11){

            const Err6x2 = x
            const Err6y2 = y

            const Affcoor12 = document.createElement('p')
            Affcoor12.textContent = "Err6x2 = " + x + "   Err6y2 = " + y
            Affcoor12.style.color = "red"
            Affcoor12.id = 'p12'
            AffErr6.appendChild(Affcoor12)

            let p11 = document.querySelector('#p11')
            let p12 = document.querySelector('#p12')

            const btnValid6 = document.createElement('button')
            btnValid6.textContent = "Valider"
            btnValid6.className = 'btnVal6'
            AffErr6.appendChild(btnValid6)
            let btnVal6 = document.querySelector('.btnVal6')


            btnVal6.addEventListener("click", function(){

                    p11.style.color = "black"
                    p12.style.color = "black"
                    
                    erreur6 = true
                    btnVal6.remove()
                    btnReco6.remove()

            })

            const btnRecom6 = document.createElement('button')
            btnRecom6.textContent = "Recommencer"
            btnRecom6.className= 'btnReco6'
            AffErr6.appendChild(btnRecom6)
            let btnReco6 = document.querySelector('.btnReco6')

            btnReco6.addEventListener("click", function(){

                click = 10
                
                p11.remove()
                p12.remove()
                btnVal6.remove()
                btnReco6.remove()
            
            })
        }      
           if (click === 12 && erreur6 === true){
            
            const Err7x1 = x
            const Err7y1 = y

            const Affcoor13 = document.createElement('p')
            Affcoor13.textContent = "Err7x1 = " + x + "   Err7y1 = " + y
            Affcoor13.style.color = "red"
            Affcoor13.id = 'p13'
            AffErr7.appendChild(Affcoor13)

            

        }
        if(click === 13){

            const Err7x2 = x
            const Err7y2 = y

            const Affcoor14 = document.createElement('p')
            Affcoor14.textContent = "Err7x2 = " + x + "   Err7y2 = " + y
            Affcoor14.style.color = "red"
            Affcoor14.id = 'p14'
            AffErr7.appendChild(Affcoor14)

            let p13 = document.querySelector('#p13')
            let p14 = document.querySelector('#p14')

            const btnValid7 = document.createElement('button')
            btnValid7.textContent = "Valider"
            btnValid7.className = 'btnVal7'
            AffErr7.appendChild(btnValid7)
            let btnVal7 = document.querySelector('.btnVal7')


            btnVal7.addEventListener("click", function(){

                    p13.style.color = "black"
                    p14.style.color = "black"
                    
                    erreur7 = true
                    btnVal7.remove()
                    btnReco7.remove()

            })

            const btnRecom7 = document.createElement('button')
            btnRecom7.textContent = "Recommencer"
            btnRecom7.className= 'btnReco7'
            AffErr7.appendChild(btnRecom7)
            let btnReco7 = document.querySelector('.btnReco7')

            btnReco7.addEventListener("click", function(){

                click = 12
                
                p13.remove()
                p14.remove()
                btnVal7.remove()
                btnReco7.remove()
            
            })
        }
        if ( erreur1 ===true &&
            erreur2 === true &&
            erreur3 === true &&
            erreur4 === true &&
            erreur5 === true &&
            erreur6 === true &&
            erreur7 === true){
                const validFinal = document.createElement('button')
                validFinal.textContent = 'Valider et enregistrer'
                CreateJson.appendChild(validFinal)
                console.log (Err2x1)
                let test = parseInt(document.querySelector('#p1').value)
                console.log(test)
            }








        click += 1
        console.log('en fin de fonction = ' + click)
        if(erreur1 === true){console.log('erreur1 = true')}
        if(erreur2 === true){console.log('erreur2 = true')}
        if(erreur3 === true){console.log('erreur3 = true')}
        if(erreur4 === true){console.log('erreur4 = true')}
        if(erreur5 === true){console.log('erreur5 = true')}
        if(erreur6 === true){console.log('erreur6 = true')}
        if(erreur7 === true){console.log('erreur7 = true')}

    })


