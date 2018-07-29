module managers {
    export class ScoreBoard {
        // member variables
        private _lives:number;
        private _score:number;
        private _highScore:number;
        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;
        private _highScoreLabel: objects.Label;

        // properties

        /**
         * Returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * Returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        /**
         * Returns a reference to the HighScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get HighScoreLabel():objects.Label {
            return this._highScoreLabel;
        }

        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            this.LivesLabel.text = "Lives: " + this._lives;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }
        
        // constructor
        constructor() {

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
        
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Dock51","#FFFF00", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Dock51", "#FFFF00", 370, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 99999", "60px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            
            this.HighScore = 0;

            this.Reset();
        }

        public Reset():void {
            this.Lives = 5;
            this.Score = 0;
        }

    }
}