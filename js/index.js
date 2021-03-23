let input = document.getElementById('info');
let items = document.getElementById('items');
let groceries = document.getElementById('groceries');
let feedback = document.getElementById('feedback');

function addItem() {
    input.value = input.value.trim();
    
    let li = document.createElement('li');
    
    li.innerText = input.value;
    
    groceries.appendChild(li);
    
    if (info.value === '') {
    alert("Please Enter an Item");
  } 
    
}








items.addEventListener('click', addItem);










