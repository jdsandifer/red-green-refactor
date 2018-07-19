// Decide what urinal to use based on which
// ones are occupied already (proper urinal etiquette)
//
// isOccupied is an array of flags (booleans) - true means occupied
const urinalToUse = isOccupied => {
    if (isOccupied[3 - 1]) {  // Urinal #3 = index 2 or 3 - 1
        return [1]
    } else if (isOccupied[1 - 1]) {
        return [3]
    }
    return [1, 2, 3, 4]
}