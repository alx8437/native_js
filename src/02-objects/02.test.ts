import { CityType } from "./02-02";

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
        governmentBuildings: [],
        citizensNumber: 30000
    }
})


test('city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builderAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].builderAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].builderAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");

})

test('city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("Hospital");
    expect(city.governmentBuildings[0].budget).toBe(20000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.governmentBuildings[0].type).toBe("Fire station");
    expect(city.governmentBuildings[0].budget).toBe(500000);
    expect(city.governmentBuildings[0].staffCount).toBe(1000);
    expect(city.governmentBuildings[0].address.street.title).toBe('South Str');

})