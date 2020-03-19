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
var startText, text1, text2, text3;
var pointsCount = 0;
var errorCount = 0;
var pointsText, errorText;
var randomLetter;
var letters;
var dropSpeed = 120;
var letterXpos;
var lettersList = [];




var game = new Phaser.Game(config);


function preload() {
    // preloading all assets at the begining
}



// ================ *CREATE* FUNCTION
function create() {

    // setting background color
    this.cameras.main.setBackgroundColor('#142850');

    // UI
    startText = this.add.text(180, 220, 'Press SPACE to start...', {
        font: 'bold 42px Tahoma',
        fill: '#AFA'
    });
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
    text3 = this.add.text(10, 540, '', {
        font: "14px Verdana",
        fill: '#f1f9f9'
    });


    this.input.keyboard.on('keydown', function (event) {
        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE) {
            startText.destroy();
        }
    });

    // dropping random letter on the scene
    letterXpos = Math.floor(Math.random() * 600) + 100;
    randomLetter = this.add.text(letterXpos, 0, getRandomLetter().toUpperCase(), {
        font: 'bold 32px Tahoma',
        fill: '#FFA'
    });

    lettersList.push(randomLetter);


    this.physics.world.enable(lettersList);

    lettersList[0].body.velocity.setTo(0, dropSpeed);
    lettersList[0].body.setMaxVelocity(0, dropSpeed);
    lettersList[0].body.setCollideWorldBounds(true);


    // keyboard events (input)
    this.input.keyboard.on('keydown', function (event) {
        let uppercaseInput = String.fromCharCode(event.keyCode).toUpperCase();
        if (event.keyCode >= 48 && event.keyCode <= 90) {
            (uppercaseInput == lettersList[0].text[0]) ? pointsCount++ : errorCount++;
            //text3.setText('Last input: ' + uppercaseInput);
        }
    });

}
// ================ END OF *CREATE* FUNCTION


// ================ *UPDATE* FUNCTION
function update() {

    //text2.setText('letter y pos: ' + Math.floor(randomLetter.body.y));
    pointsText.setText('Points: ' + pointsCount);
    errorText.setText('Errors: ' + errorCount);


}
// ================ END OF *UPDATE* FUNCTION



// ================ OTHER METHODS
function getRandomLetter() {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}



function spawnLetter() {

}