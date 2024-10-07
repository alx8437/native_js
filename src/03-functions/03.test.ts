import {StudentType} from "../02-objects/02";
import {addSkill, doesIsLiveInCity, makeStudentActive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: "Alex",
        age: 36,
        isActive: false,
        address: {
            city: {
                title: "Krasnodar",
                countryTitle: "Russia"
            },
            street: "Cherkasskaya"
        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 3,
                title: 'JS',
            },
            {
                id: 4,
                title: 'React',
            },
        ]
    }
})

test('new student skill should be added to student', () => {
    addSkill(student, 'Redux')
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('Redux');
    expect(student.technologies[4].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBeTruthy();
})

test('Does student live in city?' , () => {
    const result1: boolean = doesIsLiveInCity(student, 'Krasnodar')
    const result2: boolean = doesIsLiveInCity(student, 'Abinsk')
})