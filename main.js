class Student {
    constructor(fullName, university, course, marks) {
        this.fullName = fullName;
        this.university = university
        this.course = course;
        this.marks = marks;
        this.isStudent = true;
    }


    get getInfo() {
        return console.log(`Cтудент ${this.course}го курсу ${this.university}, ${this.fullName}`)
    }

    get getMarks() {
        return this.isStudent == false ? null : this.marks;
    }

    set setMark(mark) {
        this.isStudent ? this.marks.push(mark) : null;
    }
    get getAvrageMark() {
        return this.isStudent ? this.marks.reduce((acc, val, i) => +((acc * i + val) / (i + 1)).toFixed(1)) : null
    }

    dismiss() {
        this.isStudent = false;
    }

    recover() {
        return this.isStudent = true
    }


}

class BudgetStudent extends Student {
    constructor(fullName, university, course, marks, scholarship = 1400) {
        super(fullName, university, course, marks);
        this.scholarship = scholarship;
        this.getScholarship = function() {
            this.getAvrageMark >= 4 && this.isStudent == true ? console.log(`${this.fullName} оторимав ${this.scholarship}грн`) : console.log(`${this.fullName} злетів зі стєрухи`);
        }
        setInterval(() => this.getScholarship(), 30000)
    }
}
let martyn = new BudgetStudent('Фамуляк Мартин', `НУ 'Львівська політехніка`, 4, [5, 4, 4, 5, 5]);
console.log(`--------------------------------------------`);
console.log(`Інформація про судента`);
martyn.getInfo;
console.log(`--------------------------------------------`);
console.log(`Журнал оцінок студента`);
console.log(martyn.getMarks);
console.log(`--------------------------------------------`);
console.log(`Середня оцінка студента`);
console.log(martyn.getAvrageMark);
console.log(`--------------------------------------------`);
martyn.setMark = 3;
console.log(`Введеня нової оцінки в журнал оцінок студента `);
console.log(martyn.getMarks);
console.log(`--------------------------------------------`);
console.log(`Середня оцінка після введення нової оцінки в журнал студента`);
console.log(martyn.getAvrageMark);
console.log(`--------------------------------------------`);
martyn.dismiss();
console.log(`Студента виключено в нього немає оцінок`);
console.log(martyn.getMarks);
console.log(`... і середньоі оцінки також`);
console.log(martyn.getAvrageMark);
console.log(`--------------------------------------------`);
martyn.recover();
console.log(`Студента поновлено і журнал також`);
console.log(martyn.getMarks);
console.log(`... і середню оцінку`);
console.log(martyn.getAvrageMark);
console.log(`--------------------------------------------`);
console.log(`Інформація про стипендію студента`);
martyn.getScholarship();
console.log(`--------------------------------------------`);
martyn.dismiss();
console.log(`Студента знову виключено`);
martyn.getScholarship();
console.log(`--------------------------------------------`);
martyn.recover();
console.log(`Студента знову поновлено`);
martyn.getScholarship();
console.log(`--------------------------------------------`);
martyn.setMark = 2;
martyn.setMark = 2;
console.log(`... Але в нього тепер середня оцінка нижче 4`);
martyn.getScholarship();
console.log(`--------------------------------------------`);