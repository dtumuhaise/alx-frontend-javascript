interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const StudentOne: Student ={
    firstName: 'Dave',
    lastName: 'Jones',
    age: 30,
    location: 'Uganda'
};

const StudentTwo: Student = {
    firstName: 'Denis',
    lastName: 'Peters',
    age: 29,
    location: 'Kenya'
};

const studentsList: Student [] = [StudentOne, StudentTwo];

function renderTable() {
    const tableBody = document.querySelector('tbody');

    studentsList.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tableBody.appendChild(row);
    });
}
renderTable();

