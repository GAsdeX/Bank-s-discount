function print_clients(e) {
  console.log('five entering');

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
  try {
    console.log(user_name.search(/\d/));
    console.log(user_name.length);
    console.log(user_number.search(/\d{16}/));
    var validation = ((user_number.search(/\d{16}/) <= 0) && (user_number.length != 16 )) ||
                      (user_name.match(/\d/)) ||
                      (user_name.length <= 25 && user_name.length == 0)
    console.log(validation);
    if (validation) {
      document.getElementById('existing').innerHTML = "Invalid input data";
    }
    else if (localStorage.getItem(user_number)){
      document.getElementById('existing').innerHTML = "This number already exists";
    }  else {
      console.log(localStorage)
      document.getElementById('existing').innerHTML = "";
      localStorage.setItem(user_number, user_name);
      print_user(user_number, user_name);
    }
  } catch (err) {
    alert("you got an \"" + err + "\" error");
  }
}
