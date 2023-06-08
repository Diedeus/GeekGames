function search_jeu() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('jeuxhome');
    let spanjeu = document.querySelector('.spanjeu')
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

let listejeu = document.querySelector('.searchjeu')
let searchbarre = document.querySelector('#searchbar')

function isClickedInsideSearchBarre(element) {
    return element === searchbarre || searchbarre.contains(element);
}

// Écouter les clics sur le document
document.addEventListener('click', function(event) {
    // Vérifier si le clic est à l'intérieur de searchbarre
    if (isClickedInsideSearchBarre(event.target)) {
        // Basculer la visibilité de listejeu
        if (listejeu.style.visibility === "visible") {
            listejeu.style.visibility = "hidden";
            listejeu.style.opacity = "0";
        } else {
            listejeu.style.visibility = "visible";
            listejeu.style.opacity = "1";
        }
    } else {
        // Cacher listejeu si le clic est en dehors de searchbarre
        listejeu.style.visibility = "hidden";
        listejeu.style.opacity = "0";
    }
});