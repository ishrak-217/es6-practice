class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa";
    }
}
const student1 = new Student(12, "Mahiya");
const student2 = new Student(15, "Iqbal");
console.log(student1.name, student2.name);