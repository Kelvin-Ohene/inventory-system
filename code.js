document.getElementById("my-button").addEventListener("click", function() {
    fetch('/button_click', {
        method: 'POST'
    }).then(function(response) {
        // Process the response
    });
});
