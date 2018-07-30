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
        // Convert array values to one-based indeces
        let result = isOccupied.map((value, index, array) => {
            return index + 1  // convert zero-indexed boolean to one-based index
        })

        // Remove the last item
        return result.slice(0, result.length - 1)
    }

    // If three of five are taken, choose the first open one
    if (isOccupied[1 - 1] 
        && isOccupied[2 - 1] 
        && isOccupied[4 - 1]) {

        return [3]
    }

    // Take the first open spot if every other stall
    // is taken
    // Zero-based index means first stall is 1 - 1 = 0 (and so on)
    if (isOccupied[1 - 1] 
        && isOccupied[3 - 1] 
        && isOccupied[5 - 1]) {

        return [2]
    } else if (isOccupied[2-1] && isOccupied[4-1]) {
        return [1]
    }

    // We want to maintain every-other spacing so
    // deal with the special case of only 4 taken.
    // (Also, deal with other cases via side effect...)
    if (isOccupied[4 - 1] && !isOccupied[1 - 1] && !isOccupied[3 - 1]) {
        //  fourth ^ slot is index 3 (4 - 1)
        return [2]
    }

    // In certain cases, we have a choice of urinals
    if (isOccupied[2 - 1] 
        && isOccupied[3 - 1] 
        && !isOccupied[5 - 1]) {

        return [1, 5]
    }

    // Otherwise, if there's a urinal available without an occupied 
    // neighbor urinal, choose the first such urinal.
    urinalFreeOfNeighbors = firstOpenSlotWithoutNeighbors(isOccupied)
    if (urinalFreeOfNeighbors != -1) {
        // Convert resulting index to one-based system
        return [urinalFreeOfNeighbors + 1]
    }

    // If there isn't a urinal with all neighbors open,
    // take the least objectional one with one neighbor open
    if (isOccupied[2 - 1] 
        && isOccupied[5 - 1] 
        && !isOccupied[3 - 1]) {
        
        return [3]
    } else if (isOccupied[1 - 1] && isOccupied[4 - 1] && !isOccupied[3 - 1] && !isOccupied[5 - 1]) {
        return [3]
    }

    // Can't find a urinal without open neighbors 
    // and there's not an clear best choice so
    // we have to take what we can get
    firstOpenUrinal = isOccupied.indexOf(false)
    if (firstOpenUrinal != -1) {
        return [firstOpenUrinal + 1]  // convert to one-base index
    }
}


// This general function takes in an array and returns
// the index of the first slot without neighbors or 
// -1 if no such slot exists.
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

    // Couldn't find a slot without neighbors
    return -1
}