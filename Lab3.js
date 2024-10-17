function calculateGrade(percentage) {
    if (percentage < 0 || percentage > 100) {
        console.log("Grade: Not Applicable");
    } else if (percentage >= 90) {
        console.log("Grade: A");
    } else if (percentage >= 80) {
        console.log("Grade: B");
    } else if (percentage >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: Fail");
    }
}

// Example usage
function printStudentDetails(student) {
    console.log("Name =",student.name);
    console.log("Student ID=", student.id);
    console.log("Course=", student.course);
    console.log("Semester ", student.semester);

    console.log("Marks");
    console.log("HTML=", student.marks.html);
    console.log("CSS=", student.marks.css);
    console.log("JavaScript=", student.marks.javascript);

    const totalMarks = student.marks.html + student.marks.css + student.marks.javascript;
    const percentage = (totalMarks / 300) * 100;

    console.log("Total Marks:", totalMarks, "/ 300");
    console.log("Percentage:", percentage.toFixed(2), "%");

    // Calculate and print grade
    calculateGrade(percentage);
}

// Example student
const student = {
    name:"Pranay",
    id: "S12345",
    course: "Web Development",
    semester: 2,
    marks: {
        html: 100,
        css: 101,
        javascript: 100
    }
};
const student1 = {
    name:"akshay",
    id: "S12345",
    course: "Web Development",
    semester: 2,
    marks: {
        html: 80,
        css: 90,
        javascript: 70
    }
};
const student2 = {
    name:"Isheet",
    id: "S12345",
    course: "Web Development",
    semester: 2,
    marks: {
        html: 40,
        css: 20,
        javascript: 30
    }
};

printStudentDetails(student);
printStudentDetails(student1);
printStudentDetails(student2);
