import {StudentType} from "../02-objects/02";
import {GovernmentBuilding, HouseType} from "../02-objects/02-02";

export function sum(a: number, b: number) {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: 'Redux'});
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesIsLiveInCity = (student: StudentType, city: string): boolean => {
    return student.address.city.title === city
}

export const addMoneyToBudget = (build: GovernmentBuilding, budget: number ) => {
    build.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}
