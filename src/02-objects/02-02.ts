export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number;
    street: StreetType;
}

export type HouseType = {
    builderAt: number;
    repaired: boolean;
    address: AddressType;
}



export type GovernmentBuilding = {
    type: string;
    budget: number;
    staffCount: number;
    address: AddressType;
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuilding>,
    citizensNumber: number
}