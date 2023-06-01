let test = document.querySelector('.test')
idimgsub2.addEventListener("click", function(event){
    event.preventDefault()
    let presentation = document.querySelector('.presentation')
    let sectImg = document.querySelector('.sectImg')
    let corps7diff = document.querySelector('.corps7diff')
    
    let infos = document.querySelector('.infos')

    
    corps7diff.style.opacity = "1"
    test.style.opacity = "1"
    infos.style.opacity = "1"
    presentation.style.display = "none"
    sectImg.style.display = "none"
})