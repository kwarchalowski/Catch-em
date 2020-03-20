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
    scene: [ Intro, Catchem ]
};
// ================ END OF *GAME WINDOW* CONFIG

var game = new Phaser.Game(config);