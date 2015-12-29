var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        app = new flappyBird.FlappyBird();
        app.run();
        document.getElementById('start-button').style.display = "none";
    });


    document.getElementById('new-game').addEventListener("click", function() {
        var newGame = new flappyBird.FlappyBird();
        newGame.run();
        $('#game-over-modal').css('background', 'red');

    });
    // Assigning the app to the global `window` object so we can
    // can access it within other modules more easily
});
