module scenes {
    export class Tutorial extends objects.Scene {
        // member variables
        private _background: createjs.Bitmap;
        private _playButton: objects.Button;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult("tutorial"));
            this._playButton = new objects.Button("PlayButton", config.Screen.WIDTH, config.Screen.HEIGHT, false);
            this._playButton.x -= this._playButton.width + 15;
            this._playButton.y -= this._playButton.height + 15;

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);

            this.addChild(this._background);
            this.addChild(this._playButton);

            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}