interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher = (firstName: Teacher, lastName: Teacher) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return '${firstLetter}. ${formattedLastName}';
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}


interface StudentConstructor {
    firstName: string;
    lastName: string;
}

class Student implements StudentConstructor {
    firstName: string;
    lastName: string;

    constructor(data: StudentConstructor) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }

    workOnHomework(){
        return 'Currently working';
    }

    displayName(){
        return this.firstName;
    }
}