// Decide what urinal to use based on which
// ones are occupied already (see "Proper Urinal Etiquette").
//
// "isOccupied" is an array of booleans - true means occupied.
// Indeces represent urinals starting with the one farthest from the door.
// The return is an array of 1-based indeces for acceptable urinal options.
const urinalToUse = isOccupied => {
    // TODO: Check that input array contains at least one open urinal.
    //       Error if empty array or all occupied (true).

    // TODO: Create a 1-based array or similar object from input
    //       to allow for better readability of the urinal situation.
    //       Maybe except the same type of input as output?

    // If the bathroom is open, we can choose any urinal except
    // the last one.
    if (!isOccupied.includes(true)) {
        let result = isOccupied.map((value, index, array) => {
            // convert zero-indexed booleans to one-based indeces
            return index + 1
        })

        return result.slice(0, result.length - 1)
    }

    if (isOccupied[1 - 1] 
        && isOccupied[4 - 1] 
        && !isOccupied[3 - 1] 
        && !isOccupied[5 - 1]) {

        return [3]
    }

    // Take the first open spot if every other stall is taken
    if (isOccupied[1 - 1] 
        && isOccupied[3 - 1] 
        && isOccupied[5 - 1]) {
        return [2]
    } else if (isOccupied[2-1] && isOccupied[4-1]) {
        return [1]
    }

    // We want to maintain every-other spacing so
    // deal with the special case of only 4 taken.
    // (Also, deal with other cases where #4 is taken and 
    // we need to return 2.)
    if (isOccupied[4 - 1]
        && !isOccupied[1 - 1] 
        && !isOccupied[3 - 1]) {
        return [2]
    }

    // In one case, we have a choice of urinals
    if (isOccupied[2 - 1] 
        && isOccupied[3 - 1] 
        && !isOccupied[5 - 1]) {
        return [1, 5]
    }

    // Otherwise, if there's a urinal available without an occupied 
    // neighbor urinal, choose the first such urinal.
    urinalFreeOfNeighbors = firstOpenSlotWithoutNeighbors(isOccupied)
    if (urinalFreeOfNeighbors != -1) {
        return [urinalFreeOfNeighbors + 1]
    }

    // If there isn't a urinal with all neighbors open,
    // take the least objectional one with one neighbor open
    if (isOccupied[2 - 1] 
        && isOccupied[5 - 1] 
        && !isOccupied[3 - 1]) {
        return [3]
    }

    // Can't find a urinal without open neighbors 
    // and there's not an clear best choice so
    // we have to take what we can get
    firstOpenUrinal = isOccupied.indexOf(false)
    if (firstOpenUrinal != -1) {
        return [firstOpenUrinal + 1]
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
