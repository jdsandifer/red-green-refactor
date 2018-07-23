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
    //isOccupied = ["zero"].concat(isOccupied)

    // If the bathroom is open, we can choose any urinal except
    // the last one.
    if (!isOccupied.includes(true)) {
        // Convert array to one-based indeces
        let result = isOccupied.map((value, index, array) => {
            return index + 1
        })

        // Remove the last item and return
        return result.slice(0, result.length - 1)
    }

    // We want to maintain every-other spacing so
    // deal with the special case of only 4 taken.
    if (isOccupied[4 - 1]) {  // fourth slot is 3 (4 - 1)
        return [2]
    }

    // If there's a urinal available without an occupied 
    // neighbor urinal, choose the first such urinal.
    urinalFreeOfNeighbors = firstOpenSlotWithoutNeighbors(isOccupied)
    if (urinalFreeOfNeighbors != -1) {
        // Convert resulting index to one-based system
        return [urinalFreeOfNeighbors + 1]
    } else {
        return []
    }
}

// This general function takes in an array and returns
// the index of the first slot without neighbors or -1
// if no such slot exists.
const firstOpenSlotWithoutNeighbors = isOccupied => {
    for (let slot = 0; slot < isOccupied.length; slot++) {
        leftSide = slot - 1
        rightSide = slot + 1
        if (isOccupied[slot]) {
            continue
        } else if (leftSide >= 0 && isOccupied[leftSide]) {
            continue
        } else if (rightSide < isOccupied.length && isOccupied[rightSide]) {
            continue
        } else {
            return slot
        }
    }

    return -1
}