class Tetromino extends Phaser.Sprite
{
    constructor(centerX, centerY, game)
    {
        super(game,  0, 0, "tT");
        this.center = [centerX, centerY];
        this.cells = [[centerX, centerY-1], [centerX - 1, centerY], [centerX, centerY], [centerX + 1, centerY + 1]];
        this.game.add.existing(this);
		this.game.physics.arcade.enable(this);
        this.placed = false;
        console.log(this.cells);
        console.log(this.cells[0]);
    }

    update()
    {
        if (! this.placed)
        {
            let keyboard = this.game.input.keyboard;
            if (keyboard.isDown(Phaser.KeyCode.RIGHT))
            {
                for (let i = 0; i < this.cells.length; i++)
                {
                    (this.cells[i])[0] += BLOCK_SIZE;
                }
                this.x += BLOCK_SIZE;
            }

            if (keyboard.isDown(Phaser.KeyCode.LEFT))
            {
                for (let i = 0; i < this.cells.length; i++)
                {
                    (this.cells[i])[0] -= BLOCK_SIZE;
                }
                this.x -= BLOCK_SIZE;
            }

            if (keyboard.isDown(Phaser.KeyCode.Q))
                this.rotateRight();
        }
    }

    rotateRight()
    {
        this.angle += 1;
        console.log(this.angle);
    }
}