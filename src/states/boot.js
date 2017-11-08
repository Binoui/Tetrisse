class BootState extends Phaser.State {
    
    preload() {
    }

    create() {
        this.game.state.start('load');
    }

}
