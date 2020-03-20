class Catchem extends Phaser.Scene {
    constructor() {
        super({
            key: "playGame"
        });

    }


    score = 0;
    text1;
    text2;
    text3;
    pointsCount = 0;
    errorCount = 0;
    pointsText;
    errorText;
    randomLetter;
    letters;
    dropSpeed = 120;
    letterXpos;
    lettersList = [];

    // ================ *CREATE* FUNCTION
    create() {


        // setting background color
        this.cameras.main.setBackgroundColor('#18334f');

        // UI

        this.pointsText = this.add.text(10, 10, 'Points: x', {
            font: "12px Verdana",
            fill: '#AFA'
        });
        this.errorText = this.add.text(10, 30, 'Errors: x', {
            font: "12px Verdana",
            fill: '#FAA'
        });


        this.text1 = this.add.text(10, 580, '', {
            font: "12px Verdana",
            fill: '#f1f9f9'
        });
        this.text2 = this.add.text(10, 560, '', {
            font: "12px Verdana",
            fill: '#f1f9f9'
        });
        this.text3 = this.add.text(10, 540, '', {
            font: "14px Verdana",
            fill: '#f1f9f9'
        });

        // dropping random letter on the scene
        this.letterXpos = Math.floor(Math.random() * 600) + 100;
        this.randomLetter = this.add.text(this.letterXpos, 0, this.getRandomLetter().toUpperCase(), {
            font: 'bold 32px Tahoma',
            fill: '#FFA'
        }, this);

        this.lettersList.push(this.randomLetter);


        this.physics.world.enable(this.lettersList);


        this.lettersList[0].body.velocity.setTo(0, this.dropSpeed);
        this.lettersList[0].body.setMaxVelocity(0, this.dropSpeed);
        this.lettersList[0].body.setCollideWorldBounds(true);


        // keyboard events (input)
        this.input.keyboard.on('keydown', function (event) {
            let uppercaseInput = String.fromCharCode(event.keyCode).toUpperCase();
            if (event.keyCode >= 48 && event.keyCode <= 90) {
                if (uppercaseInput == this.lettersList[0].text[0]) {
                    this.pointsCount++
                    this.lettersList[0].destroy();
                } else {
                    this.errorCount++;
                }
                //text3.setText('Last input: ' + uppercaseInput);
            }
        }, this);

    }
    // ================ END OF *CREATE* FUNCTION


    // ================ *UPDATE* FUNCTION
    update() {


        //text2.setText('letter y pos: ' + Math.floor(randomLetter.body.y));
        this.pointsText.setText('Points: ' + this.pointsCount);
        this.errorText.setText('Errors: ' + this.errorCount);

    }
    // ================ END OF *UPDATE* FUNCTION



    // ================ OTHER METHODS
    getRandomLetter() {
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    /* spawnLetter() {

    } */
}