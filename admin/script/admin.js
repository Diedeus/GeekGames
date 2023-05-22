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