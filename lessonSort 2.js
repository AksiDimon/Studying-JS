//402

function Student(age, gpa, fullName) {
    return {
        age,
        gpa,
        fullName,
    }
};

var students = [
    new Student(23, 88, "David Goodman"), 
    new Student(25, 82, "Mark Rose"), 
    new Student(22, 90, "Jane Doe"),
    new Student(25, 90, "Jane Dane"),
];

console.log(students);

function sort(students) {
    const map = students.map(key => key)
    console.log('map',map)
    const sort = students.sort((a,b) => {
        // const lastName = a.fullName.split(" ")[1][0];
        // const lastName1 = b.fullName.split(" ")[1][0];
        // console.log(lastName1)
        // console.log("gpa", a.gpa, b)
        if(a.gpa > b.gpa) {
            return -1;
        }
        if(a.gpa < b.gpa) {
            return 1;
        }
        if(a.fullName.split(" ")[1][0] > b.fullName.split(" ")[1][0]) {
            return 1
        }
        if(a.fullName.split(" ")[1][0] < b.fullName.split(" ")[1][0]) {
            return -1
        }
        if(a.age > b.age) {
            return 1
        }
        if(a.age < b.age) {
            return -1
        }
    });
    console.log('sort',sort)
    const names = sort.map(obj => obj.fullName);
    console.log(names)
    return names.toString()
};

console.log(sort(students))
// "Jane Doe,Jane Dane,David Goodman,Mark Rose"

//403

function sortArray(array) {
    
  }
  console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4];
  console.log(sortArray([5, 3, 1, 8, 0])) //[1, 3, 5, 8, 0];
  console.log(sortArray([]))//[];

