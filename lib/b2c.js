var _b2c = /** @class */ (function () {
    //constructor 
    function _b2c(claim, inputType) {
        this.claim = claim;
        this.inputType = inputType;
        console.log("Constructor: claim=" + claim);
    }
    //functions 
    _b2c.prototype.disp = function () {
        console.log("Display: claim=" + this.claim + ", inputType=" + this.inputType);
    };
    _b2c.prototype.hide = function () {
        $(document.getElementById(this.claim)).parents("." + this.inputType).first().hide();
    };
    _b2c.prototype.show = function () {
        $(document.getElementById(this.claim)).parents("." + this.inputType).first().show();
    };
    return _b2c;
}());
// Make it chainable
function b2c(claim, inputType) {
    return new _b2c(claim, inputType);
}
