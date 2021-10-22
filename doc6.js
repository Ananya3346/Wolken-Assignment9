var Student1 = /** @class */ (function () {
    function Student1(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student1.prototype.display = function () {
        return ("My unique code: " + this.studCode + ", my name: " + this.studName + ".");
    };
    return Student1;
}());
var student1 = new Student1(4, "Johnson");
console.log(student1.display());
