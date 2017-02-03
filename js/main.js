'use strict';

var field = document.querySelector('.bank-discount .right-bar .five-clients ul')

function print_user (number, name){
    field.innerHTML += "<li><div class=\"name\">"+name+"</div><div class=\"num\">"+number+"</div></li>";
}

function print_clients(e) {
  console.log('five entering');
  ients.forEach(user => field.innerHTML += "<li><div class=\"name\">"+user.name+"</div><div class=\"num\">"+user.number+"</div></li>");
  if (localStorage.length == 0) {
    localStorage.setItem(1234123412341229, "Вася");
    localStorage.setItem(1234123412341230, "Даша");
    localStorage.setItem(1234123412341231, "Игорь");
    localStorage.setItem(1234123412341232, "Андрей");
    localStorage.setItem(1234123412341233, "Егор");
    localStorage.setItem(1234123412341234, "ГРиша");
  }
    for (var i in localStorage) {
      console.log(localStorage[i]);
      console.log(i);
      print_user(i, localStorage.getItem(i))

  }
}

function pushUser(user_name, user_number) {
  console.log(user_name+ "|"+ user_number)
  if (localStorage.getItem(user_number)){
    document.getElementById('existing').innerHTML = "This number already exists";
  } else {
    console.log(localStorage)
    document.getElementById('existing').innerHTML = "";
    localStorage.setItem(user_number, user_name)
    print_user(user_number, user_name)
  }

}

print_clients()
