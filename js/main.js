'use strict';

var field = document.querySelector('.bank-discount__right-bar__show-clients ul');

function print_user (number, name){
    field.innerHTML += "<li><div class=\"name\">"+name+"</div><div class=\"num\">"+number+"</div></li>";
}

print_clients()

document.getElementById('submit').onclick = function (){
  pushUser(document.getElementById('name').value, document.getElementById('num').value)
}
