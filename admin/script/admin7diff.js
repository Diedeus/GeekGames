
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
    CreateJson.style.justifyContent = "center"
    CreateJson.style.alignItems = "center"
    CreateJson.style.width = "100%"
    CreateJson.style.height = "70vh"
    
    let form7diff = document.querySelector('.form7diff')
    
    const PreviImg = document.createElement('img')
    PreviImg.className = "previImg"
    PreviImg.src = urlImg
    PreviImg.style.width = "500px"
    PreviImg.style.marginRight = "40px"
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
    AffiErr1.style.marginBottom = "10px"
    AffiErr1.style.flexDirection = "row"
    AffiErr1.style.justifyContent = "space-around"
    AffiErr1.style.alignItems = "center"
    donnees.appendChild(AffiErr1)
    let AffErr1 = document.querySelector('.AffErr1')

    
    const AffiErr2 = document.createElement('div')
    AffiErr2.style.display = "flex"
    AffiErr2.style.marginBottom = "10px"
    AffiErr2.style.flexDirection = "row"
    AffiErr2.className = 'AffErr2'
    donnees.appendChild(AffiErr2)
    let AffErr2 = document.querySelector('.AffErr2')

    const AffiErr3 = document.createElement('div')
    AffiErr3.style.display = "flex"
    AffiErr3.style.flexDirection = "row"
    AffiErr3.style.marginBottom = "10px"
    AffiErr3.className = 'AffErr3'
    donnees.appendChild(AffiErr3)
    let AffErr3 = document.querySelector('.AffErr3')

    const AffiErr4 = document.createElement('div')
    AffiErr4.style.display = "flex"
    AffiErr4.style.marginBottom = "10px"
    AffiErr4.style.flexDirection = "row"
    AffiErr4.className = 'AffErr4'
    donnees.appendChild(AffiErr4)
    let AffErr4 = document.querySelector('.AffErr4')

    const AffiErr5 = document.createElement('div')
    AffiErr5.style.display = "flex"
    AffiErr5.style.flexDirection = "row"
    AffiErr5.style.marginBottom = "10px"
    AffiErr5.className = 'AffErr5'
    donnees.appendChild(AffiErr5)
    let AffErr5 = document.querySelector('.AffErr5')

    const AffiErr6 = document.createElement('div')
    AffiErr6.style.display = "flex"
    AffiErr6.style.flexDirection = "row"
    AffiErr6.style.marginBottom = "10px"
    AffiErr6.className = 'AffErr6'
    donnees.appendChild(AffiErr6)
    let AffErr6 = document.querySelector('.AffErr6')

    const AffiErr7 = document.createElement('div')
    AffiErr7.style.display = "flex"
    AffiErr7.style.flexDirection = "row"
    AffiErr7.style.marginBottom = "10px"
    AffiErr7.className = 'AffErr7'
    donnees.appendChild(AffiErr7)
    let AffErr7 = document.querySelector('.AffErr7')

    let Tab = []
    let object = {}

    object = { "url1" : urlImg,
                "url2" : urlImgDiff}
                Tab.push(object)

    PreviImg.addEventListener("click", function (event) {

        console.log( 'Avant le if, click = ' + click)

        let rect = PreviImg.getBoundingClientRect();
        let x = parseInt(event.clientX - rect.left)
        let y = parseInt(event.clientY - rect.top)


        
        if (click === 0){

            const Err1x1 = x
            const Err1y1 = y

            const Affcoor1 =document.createElement('p')
            Affcoor1.textContent = "Err1x1 = " + x + " -    Err1y1 = " + y
            AffiErr1.style.color = "white"
            AffiErr1.style.backgroundColor = "red"
            AffiErr1.style.padding = "10px 20px"
            Affcoor1.style.marginRight="30px"
            Affcoor1.id = 'p1'
            AffErr1.appendChild(Affcoor1)

            object = { "Err1x1" : Err1x1,
                        "Err1y1" : Err1y1}
            Tab.push(object)

                        console.log( object)
          
        }
        if (click === 1 ){

            const Err1x2 = x
            const Err1y2 = y

            const Affcoor2 = document.createElement('p')
            Affcoor2.textContent = "Err1x2 = " + x + " - Err1y2 = " + y
            Affcoor2.style.color = "white"
            Affcoor2.style.color = "white"
            Affcoor2.style.marginRight="30px"
            Affcoor2.id = 'p2'
            AffErr1.appendChild(Affcoor2)

            let p1 = document.querySelector('#p1')
            let p2 = document.querySelector('#p2')

            const btnValid1 = document.createElement('button')
            btnValid1.textContent = "Valider"
            btnValid1.style.backgroundColor="white"
            btnValid1.style.padding="5px 10px"
            btnValid1.style.border="0"
            btnValid1.style.cursor="pointer"
            btnValid1.style.marginRight="10px"
            btnValid1.className = 'btnVal1'
            AffErr1.appendChild(btnValid1)
            let btnVal1 = document.querySelector('.btnVal1')

           PreviImg.style.pointerEvents = "none"

            object = {"Err1x2" : Err1x2, 
                        "Err1y2" : Err1y2}
                        Tab.push(object)

                        console.log(object)

            btnVal1.addEventListener("click", function(){
                AffiErr1.style.backgroundColor = "green"
                    erreur1 = true
                    btnVal1.remove()
                    btnReco1.remove()
                    PreviImg.style.pointerEvents = "auto"

            })

            const btnRecom1 = document.createElement('button')
            btnRecom1.textContent = "Recommencer"
            btnRecom1.className = 'btnReco1'
            btnRecom1.style.backgroundColor="white"
            btnRecom1.style.padding="5px 10px"
            btnRecom1.style.cursor="pointer"
            btnRecom1.style.marginRight="10px"
            btnRecom1.style.border = '0'
            AffErr1.appendChild(btnRecom1)
            let btnReco1 = document.querySelector('.btnReco1')

            btnReco1.addEventListener("click", function(){
                click = 0
                p1.remove()
                p2.remove()
                btnVal1.remove()
                btnReco1.remove()
                AffiErr1.style.backgroundColor="#3c2d87"

                PreviImg.style.pointerEvents = "auto"

                Tab.splice(Tab.length - 2, 2)
             

            })

        }
        if (click === 2  && erreur1 === true){
            
            const Err2x1 = x
            const Err2y1 = y

            const Affcoor3 =document.createElement('p')
            Affcoor3.textContent = "Err2x1 = " + x + " -   Err2y1 = " + y
            Affcoor3.style.color = "white"
            AffErr2.style.backgroundColor = "red"
            AffErr2.style.padding = "10px 20px"
            Affcoor3.style.marginRight="30px"
            Affcoor3.id = 'p3'
            AffErr2.appendChild(Affcoor3)

            object = { "Err2x1" : Err2x1,
            "Err2y1" : Err2y1}
            Tab.push(object)

            

        }
        if(click === 3){

            const Err2x2 = x
            const Err2y2 = y

            const Affcoor4 = document.createElement('p')
            Affcoor4.textContent = "Err1x2 = " + x + " -   Err1y2 = " + y
            Affcoor4.style.color = "white"
            Affcoor4.style.marginRight="30px"
            Affcoor4.id = 'p4'
            AffErr2.appendChild(Affcoor4)

            let p3 = document.querySelector('#p3')
            let p4 = document.querySelector('#p4')

            const btnValid2 = document.createElement('button')
            btnValid2.textContent = "Valider"
            btnValid2.className = 'btnVal2'
            btnValid2.style.backgroundColor="white"
            btnValid2.style.padding="5px 10px"
            btnValid2.style.border="0"
            btnValid2.style.cursor="pointer"
            btnValid2.style.marginRight="10px"
            AffErr2.appendChild(btnValid2)
            let btnVal2 = document.querySelector('.btnVal2')

            object = { "Err2x2" : Err2x2,
            "Err2y2" : Err2y2}
            Tab.push(object)

            PreviImg.style.pointerEvents = "none"

            btnVal2.addEventListener("click", function(){
                    
                    erreur2 = true
                    btnVal2.remove()
                    btnReco2.remove()
                    PreviImg.style.pointerEvents = "auto"
                    AffErr2.style.backgroundColor="green"

            })

            const btnRecom2 = document.createElement('button')
            btnRecom2.textContent = "Recommencer"
            btnRecom2.className= 'btnReco2'
            btnRecom2.style.backgroundColor="white"
            btnRecom2.style.padding="5px 10px"
            btnRecom2.style.cursor="pointer"
            btnRecom2.style.marginRight="10px"
            btnRecom2.style.border = '0'
            AffErr2.appendChild(btnRecom2)
            let btnReco2 = document.querySelector('.btnReco2')

            btnReco2.addEventListener("click", function(){

                click = 2
                
                p3.remove()
                p4.remove()
                btnVal2.remove()
                btnReco2.remove()
                AffErr2.style.backgroundColor="#3c2d87"

                Tab.splice(Tab.length - 4, 2)

                PreviImg.style.pointerEvents = "auto"
            
            })
        } 
        if (click === 4 && erreur2 === true ){
            
            const Err3x1 = x
            const Err3y1 = y

            const Affcoor5 = document.createElement('p')
            Affcoor5.textContent = "Err3x1 = " + x + " -  Err3y1 = " + y
            Affcoor5.style.color = "white"
            AffErr3.style.backgroundColor = "red"
            AffErr3.style.padding = "10px 20px"
            Affcoor5.style.marginRight="30px"
            Affcoor5.id = 'p5'
            AffErr3.appendChild(Affcoor5)

            object = { "Err3x1" : Err3x1,
            "Err3y1" : Err3y1}
            Tab.push(object)

            

        }
        if (click === 5){

            const Err3x2 = x
            const Err3y2 = y

            const Affcoor6 = document.createElement('p')
            Affcoor6.textContent = "Err3x2 = " + x + " -  Err3y2 = " + y
            Affcoor6.style.color = "white"
            Affcoor6.style.marginRight="30px"
            Affcoor6.id = 'p6'
            AffErr3.appendChild(Affcoor6)

            let p5 = document.querySelector('#p5')
            let p6 = document.querySelector('#p6')

            const btnValid3 = document.createElement('button')
            btnValid3.textContent = "Valider"
            btnValid3.className = 'btnVal3'
            btnValid3.style.backgroundColor="white"
            btnValid3.style.padding="5px 10px"
            btnValid3.style.cursor="pointer"
            btnValid3.style.marginRight="10px"
            btnValid3.style.border = '0'
            AffErr3.appendChild(btnValid3)
            let btnVal3 = document.querySelector('.btnVal3')
            object = { "Err3x2" : Err3x2,
            "Err3y2" : Err3y2}
            Tab.push(object)
            PreviImg.style.pointerEvents = "none"


            btnVal3.addEventListener("click", function(){
                    
                    erreur3 = true
                    btnVal3.remove()
                    btnReco3.remove()
                    PreviImg.style.pointerEvents = "auto"
                    AffErr3.style.backgroundColor="green"

            })

            const btnRecom3 = document.createElement('button')
            btnRecom3.textContent = "Recommencer"
            btnRecom3.className= 'btnReco3'
            btnRecom3.style.backgroundColor="white"
            btnRecom3.style.padding="5px 10px"
            btnRecom3.style.cursor="pointer"
            btnRecom3.style.marginRight="10px"
            btnRecom3.style.border = '0'
            AffErr3.appendChild(btnRecom3)
            let btnReco3 = document.querySelector('.btnReco3')

            btnReco3.addEventListener("click", function(){

                click = 4
                
                p5.remove()
                p6.remove()
                btnVal3.remove()
                btnReco3.remove()
                AffErr3.style.backgroundColor="#3c2d87"

                PreviImg.style.pointerEvents = "auto"
                
                Tab.splice(Tab.length - 6, 2)
            })
        }        
         if (click === 6 && erreur3 === true){
            
            const Err4x1 = x
            const Err4y1 = y

            const Affcoor7 = document.createElement('p')
            Affcoor7.textContent = "Err4x1 = " + x + " -   Err4y1 = " + y
            Affcoor7.style.color = "white"
            AffErr4.style.backgroundColor = "red"
            AffErr4.style.padding = "10px 20px"
            Affcoor7.style.marginRight="30px"
            Affcoor7.id = 'p7'
            AffErr4.appendChild(Affcoor7)

            object = { "Err4x1" : Err4x1,
            "Err4y1" : Err4y1}
            Tab.push(object)

            

        }
        if(click === 7){

            const Err4x2 = x
            const Err4y2 = y

            const Affcoor8 = document.createElement('p')
            Affcoor8.textContent = "Err4x2 = " + x + " -   Err4y2 = " + y
            Affcoor8.style.color = "white"
            Affcoor8.style.marginRight="30px"
            Affcoor8.id = 'p8'
            AffErr4.appendChild(Affcoor8)

            let p7 = document.querySelector('#p7')
            let p8 = document.querySelector('#p8')

            const btnValid4 = document.createElement('button')
            btnValid4.textContent = "Valider"
            btnValid4.className = 'btnVal4'
            btnValid4.style.backgroundColor="white"
            btnValid4.style.padding="5px 10px"
            btnValid4.style.cursor="pointer"
            btnValid4.style.marginRight="10px"
            btnValid4.style.border = '0'
            AffErr4.appendChild(btnValid4)
            let btnVal4 = document.querySelector('.btnVal4')

            PreviImg.style.pointerEvents = "none"

            object = { "Err4x2" : Err4x2,
            "Err4y2" : Err4y2}
            Tab.push(object)


            btnVal4.addEventListener("click", function(){
                   
                    erreur4 = true
                    btnVal4.remove()
                    btnReco4.remove()

                    PreviImg.style.pointerEvents = "auto"
                    AffErr4.style.backgroundColor="green"

            })

            const btnRecom4 = document.createElement('button')
            btnRecom4.textContent = "Recommencer"
            btnRecom4.className= 'btnReco4'
            btnRecom4.style.backgroundColor="white"
            btnRecom4.style.padding="5px 10px"
            btnRecom4.style.cursor="pointer"
            btnRecom4.style.marginRight="10px"
            btnRecom4.style.border = '0'
            AffErr4.appendChild(btnRecom4)
            let btnReco4 = document.querySelector('.btnReco4')

            btnReco4.addEventListener("click", function(){

                click = 6
                
                p7.remove()
                p8.remove()
                btnVal4.remove()
                btnReco4.remove()
                AffErr4.style.backgroundColor="#3c2d87"

                PreviImg.style.pointerEvents = "auto"

                Tab.splice(Tab.length - 8, 2)
            
            })
        }        if (click === 8 && erreur4 === true ){
            
            const Err5x1 = x
            const Err5y1 = y

            const Affcoor9 = document.createElement('p')
            Affcoor9.textContent = "Err5x1 = " + x + " -   Err5y1 = " + y
            Affcoor9.style.color = "white"
            AffErr5.style.backgroundColor = "red"
            AffErr5.style.padding = "10px 20px"
            Affcoor9.style.marginRight="30px"
            Affcoor9.id = 'p9'
            AffErr5.appendChild(Affcoor9)

            object = { "Err5x1" : Err5x1,
            "Err5y1" : Err5y1}
            Tab.push(object)

            

        }
        if(click === 9){

            const Err5x2 = x
            const Err5y2 = y

            const Affcoor10 = document.createElement('p')
            Affcoor10.textContent = "Err5x2 = " + x + " -  Err5y2 = " + y
            Affcoor10.style.color = "white"
            Affcoor10.style.marginRight="30px"
            Affcoor10.id = 'p10'
            AffErr5.appendChild(Affcoor10)

            let p9 = document.querySelector('#p9')
            let p10 = document.querySelector('#p10')

            const btnValid5 = document.createElement('button')
            btnValid5.textContent = "Valider"
            btnValid5.className = 'btnVal5'
            btnValid5.style.backgroundColor="white"
            btnValid5.style.padding="5px 10px"
            btnValid5.style.cursor="pointer"
            btnValid5.style.marginRight="10px"
            btnValid5.style.border = '0'
            
            AffErr5.appendChild(btnValid5)
            let btnVal5 = document.querySelector('.btnVal5')

            PreviImg.style.pointerEvents = "none"

            object = { "Err5x2" : Err5x2,
            "Err5y2" : Err5y2}
            Tab.push(object)


            btnVal5.addEventListener("click", function(){
                   
                    erreur5 = true
                    btnVal5.remove()
                    btnReco5.remove()
                    AffErr5.style.backgroundColor="green"

                    PreviImg.style.pointerEvents = "auto"

            })

            const btnRecom5 = document.createElement('button')
            btnRecom5.textContent = "Recommencer"
            btnRecom5.className= 'btnReco5'
            btnRecom5.style.backgroundColor="white"
            btnRecom5.style.padding="5px 10px"
            btnRecom5.style.cursor="pointer"
            btnRecom5.style.marginRight="10px"
            btnRecom5.style.border = '0'
            AffErr5.appendChild(btnRecom5)
            let btnReco5 = document.querySelector('.btnReco5')

            btnReco5.addEventListener("click", function(){

                click = 8
                
                p9.remove()
                p10.remove()
                btnVal5.remove()
                btnReco5.remove()
                AffErr5.style.backgroundColor="#3c2d87"

                PreviImg.style.pointerEvents = "auto"

                Tab.splice(Tab.length - 10, 2)
            
            })
        }
        if (click === 10 && erreur5 === true ){
            
            const Err6x1 = x
            const Err6y1 = y

            const Affcoor11 = document.createElement('p')
            Affcoor11.textContent = "Err6x1 = " + x + " -  Err6y1 = " + y
            Affcoor11.style.color = "white"
            AffErr6.style.backgroundColor = "red"
            AffErr6.style.padding = "10px 20px"
            Affcoor11.style.marginRight="30px"
            Affcoor11.id = 'p11'
            AffErr6.appendChild(Affcoor11)

            object = { "Err6x1" : Err6x1,
            "Err6y1" : Err6y1}
            Tab.push(object)

            

        }
        if(click === 11){

            const Err6x2 = x
            const Err6y2 = y

            const Affcoor12 = document.createElement('p')
            Affcoor12.textContent = "Err6x2 = " + x + " -  Err6y2 = " + y
            Affcoor12.style.color = "white"
            Affcoor12.style.marginRight="30px"
            Affcoor12.id = 'p12'
            AffErr6.appendChild(Affcoor12)

            let p11 = document.querySelector('#p11')
            let p12 = document.querySelector('#p12')

            const btnValid6 = document.createElement('button')
            btnValid6.textContent = "Valider"
            btnValid6.className = 'btnVal6'
            btnValid6.style.backgroundColor="white"
            btnValid6.style.padding="5px 10px"
            btnValid6.style.cursor="pointer"
            btnValid6.style.marginRight="10px"
            btnValid6.style.border = '0'
            AffErr6.appendChild(btnValid6)
            let btnVal6 = document.querySelector('.btnVal6')

            PreviImg.style.pointerEvents = "none"
            
            object = { "Err6x2" : Err6x2,
            "Err6y2" : Err6y2}
            Tab.push(object)


            btnVal6.addEventListener("click", function(){

                    
                    erreur6 = true
                    btnVal6.remove()
                    btnReco6.remove()
                    AffErr6.style.backgroundColor="green"

                    PreviImg.style.pointerEvents = "auto"

            })

            const btnRecom6 = document.createElement('button')
            btnRecom6.textContent = "Recommencer"
            btnRecom6.className= 'btnReco6'
            btnRecom6.style.backgroundColor="white"
            btnRecom6.style.padding="5px 10px"
            btnRecom6.style.cursor="pointer"
            btnRecom6.style.marginRight="10px"
            btnRecom6.style.border = '0'
            AffErr6.appendChild(btnRecom6)
            let btnReco6 = document.querySelector('.btnReco6')

            btnReco6.addEventListener("click", function(){

                click = 10
                
                p11.remove()
                p12.remove()
                btnVal6.remove()
                btnReco6.remove()
                AffErr6.style.backgroundColor="#3c2d87"

                PreviImg.style.pointerEvents = "auto"

                Tab.splice(Tab.length - 12, 2)
            
            })
        }      
           if (click === 12 && erreur6 === true){
            
            const Err7x1 = x
            const Err7y1 = y

            const Affcoor13 = document.createElement('p')
            Affcoor13.textContent = "Err7x1 = " + x + " -  Err7y1 = " + y
            Affcoor13.style.color = "white"
            AffErr7.style.backgroundColor = "red"
            AffErr7.style.padding = "10px 20px"
            Affcoor13.style.marginRight="30px"
            Affcoor13.id = 'p13'
            AffErr7.appendChild(Affcoor13)

            object = { "Err7x1" : Err7x1,
            "Err7y1" : Err7y1}
            Tab.push(object)

            

        }
        if(click === 13){

            const Err7x2 = x
            const Err7y2 = y

            const Affcoor14 = document.createElement('p')
            Affcoor14.textContent = "Err7x2 = " + x + " -  Err7y2 = " + y
            Affcoor14.style.color = "white"
            Affcoor14.style.marginRight="30px"
            Affcoor14.id = 'p14'
            AffErr7.appendChild(Affcoor14)

            let p13 = document.querySelector('#p13')
            let p14 = document.querySelector('#p14')

            const btnValid7 = document.createElement('button')
            btnValid7.textContent = "Valider"
            btnValid7.className = 'btnVal7'
            btnValid7.style.backgroundColor="white"
            btnValid7.style.padding="5px 10px"
            btnValid7.style.cursor="pointer"
            btnValid7.style.marginRight="10px"
            btnValid7.style.border = '0'
            AffErr7.appendChild(btnValid7)
            let btnVal7 = document.querySelector('.btnVal7')

            PreviImg.style.pointerEvents = "none"

            object = { "Err7x2" : Err7x2,
            "Err7y2" : Err7y2}
            Tab.push(object)


            btnVal7.addEventListener("click", function(){
                    
                    erreur7 = true
                    btnVal7.remove()
                    btnReco7.remove()
                    AffErr7.style.backgroundColor="green"

                    PreviImg.style.pointerEvents = "auto"

                    const validFinal = document.createElement('button')
                    validFinal.textContent = 'Valider et enregistrer'
                    validFinal.style.padding="10px 0"
                    validFinal.style.marginBottom="10px"
                    validFinal.style.marginTop="20px"
                    validFinal.style.border="0"
                    validFinal.style.cursor="pointer"
                    validFinal.id = 'validFinal'
                    donnees.appendChild(validFinal)
                   

    
                    PreviImg.style.pointerEvents = "none"

                    let objectFinal = {};

                for(const objet of Tab){
                    objectFinal = {...objectFinal, ...objet}
                }

                    console.log( "test ojt final = " + JSON.stringify(objectFinal))

                    let valid = document.querySelector('#validFinal')
                    
                    valid.addEventListener("click", function(){
                        const formFinal = document.createElement('form')
                        formFinal.method = 'POST'
                        form7diff.action = ''
                        donnees.appendChild(formFinal)

                        const inpFinal = document.createElement('input')
                        inpFinal.type = 'hidden'
                        inpFinal.id = 'inpFinal'
                        inpFinal.name ='jsonFinal'
                        formFinal.appendChild(inpFinal)

                        const btnFinal = document.createElement('input')
                        btnFinal.type = 'submit'
                        btnFinal.value = 'Validation finale'
                        btnFinal.style.padding="10px"
                        btnFinal.style.cursor="pointer"
                        btnFinal.style.textIndent="0"
                        btnFinal.id = 'btnfin2'
                        formFinal.appendChild(btnFinal)

                        let btnfin2 = document.querySelector('#btnfin2')

                        // btnfin2.addEventListener("click", function(e){
                        //     e.preventDefault()
                        // })

                        console.log( "test ojt final 2 = " + JSON.stringify(objectFinal))
                        fetch("http://localhost:4000/Jeux/SeptDiff/Asset/7diff.json")
                            .then(response => response.json())
                            .then(jsonData => {

                                for (let i = 0; i < jsonData.length; i++) {
                                    console.log("Objet", i + 1, ":", JSON.stringify(jsonData[i]));
                                }

                                jsonData.push(objectFinal)
                                console.log("type de jsondata" + typeof(jsonData))
                                console.log(jsonData.url1)

                                let jsonDataString = JSON.stringify(jsonData)
                                console.log("jsonDatastring = " + jsonDataString)
                                inpFinal.value = jsonDataString
                                
                            
                                })
                             
                            })
                    
            
    

            })

            const btnRecom7 = document.createElement('button')
            btnRecom7.textContent = "Recommencer"
            btnRecom7.className= 'btnReco7'
            btnRecom7.style.backgroundColor="white"
            btnRecom7.style.padding="5px 10px"
            btnRecom7.style.cursor="pointer"
            btnRecom7.style.marginRight="10px"
            btnRecom7.style.border = '0'
            AffErr7.appendChild(btnRecom7)
            let btnReco7 = document.querySelector('.btnReco7')

            btnReco7.addEventListener("click", function(){

                click = 12
                
                p13.remove()
                p14.remove()
                btnVal7.remove()
                btnReco7.remove()
                AffErr7.style.backgroundColor="#3c2d87"

                PreviImg.style.pointerEvents = "auto"

                Tab.splice(Tab.length - 14, 2)
            
            })
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
        console.log(object)
        console.log(Tab)

    })


