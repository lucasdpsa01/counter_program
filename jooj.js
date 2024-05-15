const d = document.getElementById("d");
const r = document.getElementById("r");
const i = document.getElementById("i");
const count = document.getElementById("count");
let c = 0;

i.onclick = function(){
    c++;
    count.textContent = c;
}
d.onclick = function(){
    c--;
    count.textContent = c;
}
r.onclick = function(){
    c = 0;
    count.textContent = c;
}