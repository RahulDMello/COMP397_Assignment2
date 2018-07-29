module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _canon:objects.Canon;
        private _ocean:objects.Ocean;
        private _meteors:objects.Meteor[];
        private _meteorNum:number;
        private _bullets: objects.Bullet[];
        private _frame: number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start(); 
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._meteorNum; count++) {
                this._meteors.push(new objects.Meteor()); 
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;

            this._bullets = new Array<objects.Bullet>();

            this._canon = new objects.Canon();
            this._ocean = new objects.Ocean();

            // creates an empty array of type Cloud
            this._meteors = new Array<objects.Meteor>();
            this._meteorNum = 3;

            this._frame = 60;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._frame++;

            this._canon.Update();
            this._ocean.Update();

            this._meteors.forEach(meteor => {
                meteor.Update();
                managers.Collision.checkMeteorCanon(this._canon, meteor);
            });

            if(this._frame >= 60) {
                 let bullet = new objects.Bullet(this);
                 this._bullets.push(bullet);
                 this.addChildAt(bullet, 1);
                 this._frame = 0;
            }

            this._bullets.forEach(bullet => {
                bullet.Update();
                if(bullet.CheckBounds()) {
                    this.removeChild(bullet);
                    this._bullets.splice(this._bullets.indexOf(bullet), 1);
                }
                this._meteors.forEach(meteor => {
                    managers.Collision.checkMeteorBullet(bullet, meteor);    
                });
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public RemoveBullet(bullet: objects.Bullet): void {
            var index = this._bullets.indexOf(bullet, 0);
            if (index > -1) {
                this._bullets.splice(index, 1);
            }
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._ocean);

            // adding the island to the scene

            // adding the plane to the scene
            this.addChild(this._canon);

            // adding the cloud to the scene
            for (const cloud of this._meteors) {
                this.addChild(cloud);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}