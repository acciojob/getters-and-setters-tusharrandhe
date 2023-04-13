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
		console.log(this.name + " is studying");
		// return ;
	}
}

class Teacher extends Person {
	get teach(){
		console.log(this.name + " is teaching");
		// return ;
	}
	
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;