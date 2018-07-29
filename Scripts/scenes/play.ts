module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _canon:objects.Canon;
        private _ocean:objects.Ocean;
        private _clouds:objects.Meteor[];
        private _cloudNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start(); 
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Meteor()); 
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._canon = new objects.Canon();
            this._ocean = new objects.Ocean();

            // creates an empty array of type Cloud
            this._clouds = new Array<objects.Meteor>();
            this._cloudNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._canon.Update();
            this._ocean.Update();

            // managers.Collision.check(this._canon, this._island);

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._canon, cloud);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._ocean);

            // adding the island to the scene

            // adding the plane to the scene
            this.addChild(this._canon);

            // adding the cloud to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}