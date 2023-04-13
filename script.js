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
	study(){
		console.log(super.name + "is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(super.name + "is teaching");
	}
}

// const t1 = new Teacher("john" , 25);
// t1.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
