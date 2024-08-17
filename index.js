const saveEl = document.getElementById('save-el');
const countEl = document.getElementById('counter-el');
let count =0;

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log("Updated count:", count);
}
function save(){
    var save_el=count+':';
    saveEl.textContent +=save_el;
    countEl.textContent=0;
    count=0
}