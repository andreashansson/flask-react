export var functions = {

  test: function() {
    console.log("TEST");
    fetch("/api", {method: "POST"}).then(function(response) {
    return response.json();
    }).then(function(result) {
      console.log(result);
    });
  },
  home: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("HOME");
  },
  info: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("INFO");
  },
  booking: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("BOOKING");
  },
  packages: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("PACKAGES");
  },
  prices: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("PRICES");
  },
  pictures: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("PICTURES");
  },
  contact: function() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    console.log("CONTACT");
  },
  menutoggle: function() {
    var menu = document.getElementById("menu");
    console.log("MENU TOGGLE");

    if (menu.style.display === "none") {
      menu.style.display = "block";
    }
    else {
      menu.style.display = "none";
    }
  }
}
