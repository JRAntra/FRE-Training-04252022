// let a : string  = "a"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person2 = /** @class */ (function () {
    function person2() {
        this.name = "JR";
        this.age = 20;
        // constructor(name: string, age: number){
        //     this.name = name
        //     this.age = age
        // }
    }
    return person2;
}());
var person3 = /** @class */ (function (_super) {
    __extends(person3, _super);
    function person3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.address = "Virginia";
        return _this;
    }
    return person3;
}(person2));
var employer1 = new person3();
// class person4 implements person1{
// }
// const employer1 = new person2("JR", 20)
console.log(employer1);
// let nameA = "david"
// const employer2 : person1 = {
//     name: "JR",
//     age: 20,
//     foo():void {
//         this.name = "David"
//     }
// }
// console.log(employer2)
