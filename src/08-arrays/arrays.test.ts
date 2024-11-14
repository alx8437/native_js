type usersType = {
    [key: string]: {id: number, name: string}
}

let users: usersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Sasha'},
        '123': {id: 123, name: 'Natasha'},
        '1': {id: 1, name: 'Margaret'},
        '0': {id: 0, name: 'Vladislav'}
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Margarita'

    expect(users['1'].name).toBe('Margarita')
})

test('should delete corresponding user', () => {
    delete users['1'];

    expect(users['1']).toBeUndefined()
})

