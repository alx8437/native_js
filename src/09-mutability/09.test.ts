type UserType = {
    name: string
    age: number
}

const increaseAge = (u: UserType) => {
    u.age++
}

test('reference test', () => {
    const user: UserType = {
        name: 'Alex',
        age: 36,
    }

    increaseAge(user)

    expect(user.age).toBe(37)
})

test('array reference test', () => {
    const users: UserType[] = [
        {
            name: 'Alex',
            age: 36,
        },
        {
            name: 'Natasha',
            age: 23
        }
    ]

    const admins = users

    admins.push({name: 'BadBoy', age: 18})

    expect(users[2].name).toBe('BadBoy')
})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount

    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
})