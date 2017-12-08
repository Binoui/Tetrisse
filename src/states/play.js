class PlayState extends Phaser.State {
    create() {
        new Tetromino(0, 0, this.game);
    }
}
