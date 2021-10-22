var Employee = /** @class */ (function () {
    function Employee(empcode, name) {
        this.empCode = empcode;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    };
    return Employee;
}());
var per1 = new Employee(100, "Bill");
per1.display(); // Name = Bill, Employee Code = 100
