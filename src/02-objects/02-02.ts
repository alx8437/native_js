export type StreetType = {
    title: string
}

export type AddressType = {
    number: number;
    street: StreetType;
}

export type HouseType = {
    builderAt: number;
    repaired: boolean;
    address: AddressType;
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: [],
    citizensNumber: number
}