import {
    addNewCompany,
    moveUser,
    removeBook, updateCompany, updateCompanyTitle,
    upgradeBooksUser,
    upgradeLaptopUser,
    User,
    UserWithBooks,
    UserWithLaptop, WithCompanies
} from "./10-immutable";

test('Should change user city', () => {
    const user: User = {
        name: 'Alex',
        age: 36,
        address: {
            city: 'Krasnodar',
            house: '36'
        }
    }

    const changedUser = moveUser(user, 'Severskaya')

    expect(changedUser.address.city).toBe('Severskaya');
})

test('upgrade laptop to macbook', () => {
    const userWithLaptop: UserWithLaptop = {
        name: 'Alex',
        age: 36,
        address: {
            house: '21',
            city: 'Krasnodar'
        },
        laptop: {
            title: 'Asus'
        }
    }

    const upgradeUser = upgradeLaptopUser(userWithLaptop, 'Macbook');

    expect(upgradeUser).not.toBe(userWithLaptop);
    expect(userWithLaptop.laptop).not.toBe(upgradeUser.laptop);
    expect(userWithLaptop.address).toBe(upgradeUser.address);
    expect(upgradeUser.laptop.title).toBe('Macbook');

})


test('update books array', () => {
    const userWithBooks: UserWithBooks = {
        name: 'Alex',
        age: 36,
        address: {
            house: '21',
            city: 'Krasnodar'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['html', 'css', 'js']
    }

    const upgradeUser = upgradeBooksUser(userWithBooks, 'js', 'ts');

    expect(userWithBooks).not.toBe(upgradeUser);
    expect(upgradeUser.books[2]).toBe('ts');
})

test('remove book from array', () => {
    const userWithBooks: UserWithBooks = {
        name: 'Alex',
        age: 36,
        address: {
            house: '21',
            city: 'Krasnodar'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['html', 'css', 'js']
    }

    const upgradeUser = removeBook(userWithBooks, 'js');

    expect(userWithBooks).not.toBe(upgradeUser);
    expect(upgradeUser.books[2]).toBeUndefined();
    expect(upgradeUser.books.length).toBe(2);
})

test('add new company', () => {
    const user: UserWithBooks & WithCompanies = {
        name: 'Alex',
        age: 36,
        address: {
            house: '21',
            city: 'Krasnodar'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['html', 'css', 'js'],
        companies: [{id: 0, title: 'Yandex'}, {id: 1, title: 'google'}]
    }

    const upgradeUser = addNewCompany(user, {id: 3, title: 'fb'});

    expect(user).not.toBe(upgradeUser);
    expect(upgradeUser.companies.length).toBe(3);
    expect(upgradeUser.companies[2].title).toBe('fb');
})

test('update company', () => {
    const user: UserWithBooks & WithCompanies = {
        name: 'Alex',
        age: 36,
        address: {
            house: '21',
            city: 'Krasnodar'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['html', 'css', 'js'],
        companies: [{id: 0, title: 'Yandex'}, {id: 1, title: 'google'}]
    }

    const upgradeUser = updateCompany(user, 0, 'fb');

    expect(user).not.toBe(upgradeUser);
    expect(upgradeUser.companies[0].title).toBe('fb');
})

test('update company in associated array', () => {
    const user: UserWithBooks = {
        name: 'Alex',
        age: 36,
        address: {
            house: '21',
            city: 'Krasnodar'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['html', 'css', 'js'],
    }

    const companies = {
        'Alex': [{id: 0, title: 'Yandex'}, {id: 1, title: 'google'}],
        'Sergey': [{id: 0, title: 'Mail'}]
    }

    const changedCompanyList = updateCompanyTitle(companies, 'Alex', 0, 'Fb');

    expect(changedCompanyList['Alex'][0].title).toBe('Fb');

})