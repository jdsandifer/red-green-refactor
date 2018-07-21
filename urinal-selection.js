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

    // TODO: Most of this code could probably be simplified into
    // a single concept - something like "if there's a urinal
    // available without an occupied neighboring urinal, choose
    // the first such urinal"
    if (isOccupied[1] && isOccupied[3]) {
        return [5]

    } else if (isOccupied[1]) { // if #5 is occupied or not
        return [3]

    } else if (isOccupied[3] || isOccupied[5]) {
        return [1]

    } else if (isOccupied[2]) {
        return [4]
        
    } else if (!isOccupied.includes(true)) {
        return [1, 2, 3, 4]
    }
}