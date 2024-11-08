type LessonType = {
    title: string
}

type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type ManType = {
    name: string,
    age: number,
    lessons: Array<LessonType>,
    address: AddressType
}

let props: ManType

beforeEach(() => {
    props = {
        name: 'Aleksandr',
        age: 36,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Cherkasskaya'
            }
        }
    }
})

test('', () => {
    const {address: {street: {title}}} = props;

    const age = props.age;

    expect(age).toBe(36)
    expect(title).toBe('Cherkasskaya')
})

test('array destructuring', () => {
    const l1 = [props.lessons[0]];
    const l2 = [props.lessons[1]];
})