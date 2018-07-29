module scenes {
    export class Tutorial extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _playButton: objects.Button;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._welcomeLabel = new objects.Label("TUTORIAL", "80px", "Consolas", "#000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._playButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);

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

            this.addChild(this._welcomeLabel);
            this.addChild(this._playButton);

            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}