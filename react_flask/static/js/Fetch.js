export var fetchData = function() {
  fetch("/api", {method: "POST"}).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result);
  });
}
