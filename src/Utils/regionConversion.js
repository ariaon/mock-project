const regionMonetarySymbol = (regionName) => {
    switch (regionName){
        case 'EU': 
            return '£'
        case 'US':
            return '$'
        default:
            return '£'
    }
}

const convertEuro = (amount, destRegion) => {
    switch (destRegion){
        case 'US':
            return amount * 1.02382
        default:
            return -1
    }
}

export { regionMonetarySymbol, convertEuro }