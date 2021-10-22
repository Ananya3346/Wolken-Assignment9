// Base class
class Person {
    Name: string;
    constructor(name: string) {
        this.Name = name;
    }
    }
    // Deriving Teacher class
    class Teacher extends Person {
    Payment: number;
    constructor(name: string, payment: number) {
        super(name);
        this.Payment = payment;
    }
    display(): void {
        console.log("Teacher's Name: " + this.Name);
        console.log("Teacher's Payment " + this.Payment);
    }
    }
    // Create Object
    let obj = new Teacher("John", 8500000);
    obj.display();
    