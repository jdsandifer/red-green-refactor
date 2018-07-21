// Decide what urinal to use based on which
// ones are occupied already (see "Proper Urinal Etiquette").
//
// "isOccupied" is an array of booleans - true means occupied.
// Indeces represent urinals starting with the one nearest the door.
const urinalToUse = isOccupied => {

    // Add a zeroeth item to the array so we can use
    // indeces as if they started at one. 
    // This will simplify array accessing.
    // A different type makes accessing mistakes more obvious. 
    isOccupied = ["zero"].concat(isOccupied)

    if (isOccupied[1] && isOccupied[3]) {
        return [5]
    } else if (isOccupied[3]) {
        return [1]
    } else if (isOccupied[1]) {
        return [3]
    } else if (isOccupied[5]) {
        return [1]
    } else if (!isOccupied.includes(true)) {
        return [1, 2, 3, 4]
    }
}