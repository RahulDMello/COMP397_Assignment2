namespace objects {
    export class Bullet extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
      private _scene: scenes.Play;
  
      /**
       * Creates an instance of Bullet.
       * @memberof Bullet
       */
      constructor(playScene: scenes.Play) {
        super("bullet");

        this._scene = playScene;
  
        this.Start();
      }
  
      // private methods
      
  
      // public methods

      public CheckBounds(): boolean {
        // check bottom boundary
        return this.y < 0 || this.x < 0 || this.x > config.Screen.WIDTH
      }

      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;

        let x1 = managers.Game.Stage.mouseX - config.Screen.HALF_WIDTH;
        let y1 = managers.Game.Stage.mouseY;
        let x2 = 0;
        let y2 = config.Screen.HEIGHT;

        this.x = config.Screen.HALF_WIDTH;
        this.y = config.Screen.HEIGHT;

        this._horizontalSpeed = Math.round(((-x1 * ((y2 - y1 - 2)/(y2 - y1))) + x1) * 100) / 100;
        this._verticalSpeed = -2;
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
      }
  
      public Reset(): void {

      }
    }
  }
  