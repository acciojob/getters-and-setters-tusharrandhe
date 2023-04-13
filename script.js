//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get getName(){
		return this._name;
	}

	set setAge(age){
		this._age = age;
	}
}

class Student extends Person {
	get study(){
		// console.log();
		return this._name + "is studying";
	}
}

class Teacher extends Person {
	get teach(){
		// console.log();
		return this._name + "is teaching";
	}
}

// const t1 = new Teacher("john" , 25);
// t1.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
