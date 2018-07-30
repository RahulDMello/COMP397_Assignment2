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
    var Tutorial = /** @class */ (function (_super) {
        __extends(Tutorial, _super);
        // constructors
        function Tutorial() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Tutorial.prototype.Start = function () {
            this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult("tutorial"));
            this._playButton = new objects.Button("PlayButton", config.Screen.WIDTH, config.Screen.HEIGHT, false);
            this._playButton.x -= this._playButton.width + 15;
            this._playButton.y -= this._playButton.height + 15;
            this.Main();
        };
        Tutorial.prototype.Update = function () {
        };
        Tutorial.prototype.Reset = function () {
        };
        Tutorial.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Tutorial.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._background);
            this.addChild(this._playButton);
            this._playButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map