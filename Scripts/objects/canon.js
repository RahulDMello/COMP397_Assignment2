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
var objects;
(function (objects) {
    var Canon = /** @class */ (function (_super) {
        __extends(Canon, _super);
        /**
         * Creates an instance of Canon.
         * @memberof Canon
         */
        function Canon() {
            var _this = _super.call(this, "canon") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Canon.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Canon.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight + 20;
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HEIGHT - 10;
        };
        Canon.prototype.Update = function () {
            var pos = managers.Game.Stage.mouseX;
            pos -= config.Screen.HALF_WIDTH;
            var rotation = 90 * pos / config.Screen.HALF_WIDTH;
            this.rotation = rotation;
            this._checkBounds();
        };
        Canon.prototype.Reset = function () { };
        return Canon;
    }(objects.GameObject));
    objects.Canon = Canon;
})(objects || (objects = {}));
//# sourceMappingURL=canon.js.map