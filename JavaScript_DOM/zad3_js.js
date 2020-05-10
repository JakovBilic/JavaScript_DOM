let boje =["black","blue"]
let tag1 = document.getElementById("tag1")
br = 0
function funkcija() {
    tag1.style.backgroundColor = boje[br]
    br = (br+1)%boje.length


}