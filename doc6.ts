class Student1 {  
    public studCode: number;  
    private studName: string;  
    constructor(code: number, name: string){  
    this.studCode = code;  
    this.studName = name;  
    }  
    public display() {  
    return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
    }  
    }  
      
    let student1: Student1 = new Student1(4, "Johnson");  
    console.log(student1.display());  