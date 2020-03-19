// ================ *GAME WINDOW* CONFIG
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
// ================ END OF *GAME WINDOW* CONFIG


var score = 0;
var text1;
var text2;
var text3;
var pointsCount = 0;
var errorCount = 0;
var pointsText;
var errorText;
var randomLetter;
var letters;
var dropSpeed = 500;
var letterXpos;
var lettersList;




var game = new Phaser.Game(config);


function preload() {
    // preloading all assets at the begining
}



// ================ *CREATE* FUNCTION
function create() {

    // setting background color
    this.cameras.main.setBackgroundColor('#142850');

    // UI
    pointsText = this.add.text(10, 10, 'Points: x', {
        font: "12px Verdana",
        fill: '#AFA'
    });
    errorText = this.add.text(10, 30, 'Errors: x', {
        font: "12px Verdana",
        fill: '#FAA'
    });


    text1 = this.add.text(10, 580, '', {
        font: "12px Verdana",
        fill: '#f1f9f9'
    });
    text2 = this.add.text(10, 560, '', {
        font: "12px Verdana",
        fill: '#f1f9f9'
    });
    text3 = this.add.text(10, 540, 'Last input: ', {
        font: "14px Verdana",
        fill: '#f1f9f9'
    });

    letterXpos = Math.floor(Math.random() * 600) + 100;

    // dropping random letter on the scene
    randomLetter = this.add.text(letterXpos, 0, getRandomLetter().toUpperCase(), {
        fontSize: '42px',
        fontFamily: 'Tahoma',
        fill: '#FFA'
    });


    this.physics.world.enable(randomLetter);

    randomLetter.body.velocity.setTo(0, dropSpeed);
    randomLetter.body.setMaxVelocity(0, dropSpeed);
    randomLetter.body.setCollideWorldBounds(true);


    // keyboard events (input)
    this.input.keyboard.on('keydown', function (event) {
        let uppercaseInput = String.fromCharCode(event.keyCode).toUpperCase();
        if (event.keyCode >= 48 && event.keyCode <= 90) {
            (uppercaseInput == randomLetter.text[0]) ? pointsCount++ : errorCount++;
            text3.setText('Last input: ' + uppercaseInput);
        }
    });

}
// ================ END OF *CREATE* FUNCTION


// ================ *UPDATE* FUNCTION
function update() {

    text2.setText('letter y pos: ' + Math.floor(randomLetter.body.y));
    pointsText.setText('Points: ' + pointsCount);
    errorText.setText('Errors: ' + errorCount);


}
// ================ END OF *UPDATE* FUNCTION



// ================ OTHER METHODS
function getRandomLetter() {
    let characters = 'abcdefghijklmnopqrstuvwxyz';

    return characters.charAt(Math.floor(Math.random() * characters.length));
}