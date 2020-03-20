class Intro extends Phaser.Scene {
    constructor() {
        super({
            key: "introGame"
        });
    }

    delay = 5; //time in seconds
    timerText;
    isStarted = false;

    // ================ *CREATE* FUNCTION
    create() {

        this.cameras.main.setBackgroundColor('#18334f');

        this.add.text(180, 220, 'Press SPACE to start...', {
            font: 'bold 42px Tahoma',
            fill: '#AFA'
        });

        this.timerText = this.add.text(300, 300, '', {
            font: '16px Tahoma',
            fill: '#FFF',
            align: 'center'
        });




        // jump to the second scene when SPACE is hit and after set delay
        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE) {
                this.isStarted = true;
                this.time.addEvent({
                    delay: 1000,
                    callback: () => {
                        (Math.floor(this.delay) == 1) ? this.scene.start("playGame"): this.delay--;
                    },
                    loop: true
                })
            }
        }, this);
    }
    // ================ END OF *CREATE* FUNCTION

    // ================ *UPDATE* FUNCTION
    update() {
        (this.isStarted) ? this.timerText.setText('Game starting in ' + this.delay + ' seconds!'): this.timerText.setText('');
    }
    // ================ END OF *UPDATE* FUNCTION

}