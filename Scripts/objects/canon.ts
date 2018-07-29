namespace objects {
  export class Canon extends objects.GameObject {
    
    /**
     * Creates an instance of Canon.
     * @memberof Canon
     */
    constructor() {
      super("canon");

      this.Start();
    }

    // private methods
    private _checkBounds():void {
        // check right boundary
        if(this.x > config.Screen.WIDTH - this.halfWidth ) {
            this.x = config.Screen.WIDTH - this.halfWidth;
        }

        // check left boundary
        if(this.x < this.halfWidth) {
            this.x = this.halfWidth;
        }
    }

    // public methods
    public Start(): void { 
        this.regX = this.halfWidth;
        this.regY = this.halfHeight + 20;
        this.x = config.Screen.HALF_WIDTH;
        this.y = config.Screen.HEIGHT - 10;
    }

    public Update(): void {
        var pos = managers.Game.Stage.mouseX;
        pos -= config.Screen.HALF_WIDTH;
        var rotation = 90 * pos / config.Screen.HALF_WIDTH;
        this.rotation = rotation;
        this._checkBounds();
    }

    public Reset(): void {}
  }
}
