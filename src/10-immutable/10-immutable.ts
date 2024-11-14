export type User = {
    name: string
    age: number
    address: {
        city: string
        house: string
    }
}

type LaptopType = {
    title: string
}

export type UserWithLaptop = User & {
    laptop: LaptopType
}

export type UserWithBooks = UserWithLaptop & {
    books: Array<string>
}

type Company = {id: number, title: string};

export type WithCompanies = {
    companies: Array<Company>

}

export const moveUser = (user: User, city: string): User => {
    return {...user, address: {...user.address, city}}
}

export function upgradeLaptopUser(user: UserWithLaptop, laptop: string) {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptop
        }
    }
}

export function upgradeBooksUser(user: UserWithBooks, oldBook: string, newBook: string): UserWithBooks {
    return {
        ...user,
        books: user.books.map(book => book === oldBook ? newBook : book)
    }
}

export const removeBook = (user: UserWithBooks, book: string) => ({...user, books: user.books.filter(b => b !== book)})

export const addNewCompany = (user: UserWithBooks & WithCompanies, newCompany: {id: number, title: string}) => ({...user, companies: [...user.companies, newCompany]})

export const updateCompany = (user: UserWithBooks & WithCompanies, id: number, newCompany: string) => {
    return {
        ...user,
        companies: user.companies.map(company => company.id === id ? {...company, title: newCompany} : company)
    }
}

export const updateCompanyTitle = (companies: {[key: string]: Array<Company>}, name: string, companyId: number, newTitle: string) => {
    const companyCopy = {...companies}

    companyCopy[name] = companyCopy[name].map(company => company.id === companyId ? {...company, title: newTitle} : company)

    return companyCopy
}