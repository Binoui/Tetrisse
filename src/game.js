BLOCK_SIZE = 10;

class Game extends Phaser.Game {
  constructor() {

    let w, h;
    const RESOLUTION = 800;
    w = RESOLUTION;
    h = RESOLUTION*(window.innerHeight / window.innerWidth);

    super(w, h, Phaser.CANVAS, 'canvas', null, null, false);

    this.state.add('boot', BootState, true);
    this.state.add('load', LoadState, false);
    this.state.add('play', PlayState, false);

  }
}
