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
        // member variables
        // constructors
        function Tutorial() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Tutorial.prototype.Start = function () {
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
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map