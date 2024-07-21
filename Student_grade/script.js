function calculateGrades() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
        alert('Please enter valid grades for all subjects.');
        return;
    }

    const averageGrade = (subject1 + subject2 + subject3 + subject4) / 4;
    let finalGrade = '';

    if (averageGrade >= 90) {
        finalGrade = 'A';
    } else if (averageGrade >= 80) {
        finalGrade = 'B';
    } else if (averageGrade >= 70) {
        finalGrade = 'C';
    } else if (averageGrade >= 60) {
        finalGrade = 'D';
    } else {
        finalGrade = 'F';
    }

    document.getElementById('averageGrade').textContent = `Average Grade: ${averageGrade.toFixed(2)}`;
    document.getElementById('finalGrade').textContent = `Final Grade: ${finalGrade}`;
    document.getElementById('results').style.display = 'block';
}
