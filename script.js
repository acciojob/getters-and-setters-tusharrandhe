//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get getName(){
		return this.name;
	}

	set setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	get study(){
		// console.log();
		return this.name + "is studying";
	}
}

class Teacher extends Person {
	get teach(){
		// console.log();
		return this.name + "is teaching";
	}
}

// const t1 = new Teacher("john" , 25);
// t1.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
