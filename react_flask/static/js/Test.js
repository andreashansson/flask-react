export var test = function() {
  fetch("/test/andreas/", {method: "GET"}).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result);
  });
}
