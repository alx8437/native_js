type CityLocalType = {
    title: string
    countryTitle: string
}

type TechnologyType = {
    id: number
    title: string
}

type AddressLocalType = {
    city: CityLocalType
    street: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressLocalType
    technologies: Array<TechnologyType>
}

const student: StudentType = {
    id: 1,
    name: "Alex",
    age: 36,
    isActive: true,
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