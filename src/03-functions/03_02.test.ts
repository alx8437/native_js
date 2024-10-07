
import {addMoneyToBudget, repairHouse} from "./03";
import {CityType} from "../02-objects/02-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }
                },
                repaired: false,
                builderAt: 2012
            },
            {
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street',
                    }
                },
                repaired: false,
                builderAt: 2008
            },
            {
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street',
                    }
                },
                repaired: false,
                builderAt: 2020
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                address: {
                    street: {
                        title: 'Central Str',
                    }
                },
                staffCount: 200
            },
            {
                type: 'FIRE_STATION',
                budget: 500000,
                address: {
                    street: {
                        title: 'South Str',
                    }
                },
                staffCount: 1000
            }
        ],
        citizensNumber: 30000
    }
})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be changes for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000);
    expect(city.governmentBuildings[1].budget).toBe(500000);
})

test('Budget should be changes for FIRE_STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('Houses should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})




