const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        // grades is an object: { math: 85, english: 90, ... }
    },
    
    // Get a student by name
    getStudent(name) {
        // Return student object or null
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        // Return average of all their grades
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        // Return average grade for that subject across all students
    },
    
    // Get top performer
    getTopStudent() {
    }
    
    getStrugglingStudents() {
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        let reportCard = `Report Card for ${student.name}:\n`;
        let total = 0;
        let count = 0;

        for (const [subject, grade] of Object.entries(student.grades)) {
            const letterGrade = this.getLetterGrade(grade);
            reportCard += `${subject}: ${grade} (${letterGrade})\n`;
            total += grade;
            count++;
        }

        const average = (total / count).toFixed(2);
        reportCard += `Overall Average: ${average}\n`;

        return reportCard;
    }
};
  }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));
