const calculateAttendanceButton = document.getElementById('calculate-attendance');
const totalClassesInput = document.getElementById('total-classes');
const classesAttendedInput = document.getElementById('classes-attended');
const attendancePercentageElement = document.getElementById('attendance-percentage');
const attendanceStatusElement = document.getElementById('attendance-status');

calculateAttendanceButton.addEventListener('click', () => {
    const totalClasses = parseInt(totalClassesInput.value);
    const classesAttended = parseInt(classesAttendedInput.value);

    if (totalClasses > 0 && classesAttended >= 0 && classesAttended <= totalClasses) {
        const attendancePercentage = (classesAttended / totalClasses) * 100;
        attendancePercentageElement.textContent = `Attendance: ${attendancePercentage.toFixed(2)}%`;

        if (attendancePercentage >= 75) {
            attendanceStatusElement.textContent = 'You are meeting the attendance requirement!';
        } else {
            attendanceStatusElement.textContent = 'Attendance below 75%. Please attend more classes.';
        }
    } else {
        attendancePercentageElement.textContent = 'Invalid input.';
        attendanceStatusElement.textContent = '';
    }
});