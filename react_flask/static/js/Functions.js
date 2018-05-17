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
    console.log("HOME");
  },
  info: function() {
    console.log("INFO");
  },
  booking: function() {
    console.log("BOOKING");
  },
  packages: function() {
    console.log("PACKAGES");
  },
  prices: function() {
    console.log("PRICES");
  },
  pictures: function() {
    console.log("PICTURES");
  },
  contact: function() {
    console.log("CONTACT");
  }
}
