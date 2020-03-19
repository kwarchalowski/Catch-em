var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
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


var score = 0;
var scoreText;


var game = new Phaser.Game(config);

function preload() {
    // preloading all assets at the begining

}




function create() {

    // setting background color
    this.cameras.main.setBackgroundColor('#123456');

    // setting score text
    scoreText = this.add.text(10, 580, 'Score: 0', {
        font: "12px Verdana",
        fill: '#fff'
    });


}

function update() {

}

