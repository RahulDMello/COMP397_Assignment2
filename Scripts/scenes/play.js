var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildClouds = function () {
            for (var count = 0; count < this._meteorNum; count++) {
                this._meteors.push(new objects.Meteor());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._bullets = new Array();
            this._canon = new objects.Canon();
            this._ocean = new objects.Ocean();
            // creates an empty array of type Cloud
            this._meteors = new Array();
            this._meteorNum = 3;
            this._frame = 60;
            this._buildClouds();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._frame++;
            this._canon.Update();
            this._ocean.Update();
            this._meteors.forEach(function (meteor) {
                meteor.Update();
                managers.Collision.checkMeteorCanon(_this._canon, meteor);
            });
            if (this._frame >= 60) {
                var bullet = new objects.Bullet(this);
                this._bullets.push(bullet);
                this.addChildAt(bullet, 1);
                this._frame = 0;
            }
            this._bullets.forEach(function (bullet) {
                bullet.Update();
                if (bullet.CheckBounds()) {
                    _this.removeChild(bullet);
                    _this._bullets.splice(_this._bullets.indexOf(bullet), 1);
                }
                _this._meteors.forEach(function (meteor) {
                    managers.Collision.checkMeteorBullet(bullet, meteor);
                });
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.RemoveBullet = function (bullet) {
            var index = this._bullets.indexOf(bullet, 0);
            if (index > -1) {
                this._bullets.splice(index, 1);
            }
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            // adding the island to the scene
            // adding the plane to the scene
            this.addChild(this._canon);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._meteors; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map