// Decide what urinal to use based on which
// ones are occupied already (proper urinal etiquette).
//
// isOccupied is an array of flags (booleans) - true means occupied.
// Indeces represent urinals starting at the one nearest the door.
const urinalToUse = isOccupied => {
    // Add a zeroeth item to the array so we can use
    // indeces as if they started at one and
    // make it a different type so it's easier to
    // catch mistakes.
    isOccupied = ["zero"].concat(isOccupied)

    if (isOccupied[3]) {  // Urinal #3 = index 2 or 3 - 1
        return [1]
    } else if (isOccupied[1]) {
        return [3]
    }
    return [1, 2, 3, 4]
}