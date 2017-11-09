class LoadState extends Phaser.State {
    preload() {
        this.game.stage.backgroundColor = '#72a8ff';
        this.loaded = false;

        this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.load.image("tI", "assets/tI.png");
        this.game.load.image("tL", "assets/tL.png");
        this.game.load.image("tR", "assets/tR.png");
        this.game.load.image("tS", "assets/tS.png");
        this.game.load.image("tT", "assets/tT.png");
    }

    checkIfLoaded() {
        if(this.loaded) {
            clearInterval(this.interval);
            this.game.state.start('play');
        }
    }

    create() {
        this.loaded = true;
    }

}
