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
	study(){
		console.log(this._name + " is studying");
		// return ;
	}
}

class Teacher extends Person {
	teach(){
		console.log(this._name + " is teaching");
		// return ;
	}
	
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;