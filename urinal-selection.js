// Decide what urinal to use based on which
// ones are occupied already (see "Proper Urinal Etiquette").
// This algorithm only works for rooms with 35 or fewer urinals.
//
// "urinalSituation" is an array of booleans - true means occupied.
// Indeces represent urinals starting with the one farthest from the door.
// The return is an array of 1-based indeces for acceptable urinal options.
const urinalToUse = isOccupied => {
  // TODO: Ensure isOccupied has 35 or fewer booleans
  const urinalSituation = isOccupied.map(urinalSituationFromBooleanArray).join("")
  return urinalChoice(urinalSituation)
}


// Convert boolean array to "urinal situation" string like this: "..3.5"
// Each character represents a urinal, "." means unoccupied,
// a number represents occupied and represents the 1-based index
// starting farthest from the bathroom entry door
const urinalSituationFromBooleanArray = (isTaken, index) => {
  const oneBasedIndex = index + 1
  const baseThirtySixDigitForOccupied = 
      oneBasedIndex <= 9 ? oneBasedIndex : String.fromCharCode(oneBasedIndex + 87)
  return isTaken ? baseThirtySixDigitForOccupied : "."
}


// Expects a urinalSituation string like this: "..3.5"
// Each character represents a urinal, "." means unoccupied,
// a number represents occupied and represents the 1-based index
// starting farthest from the bathroom entry door
const urinalChoice = urinalSituation => {
    // TODO: Check that input array contains at least one open urinal.
    //       Error if empty array or all occupied (true).

    const allUrinalsAreOpen = [].every.call(urinalSituation, digit => digit === ".")
    if (allUrinalsAreOpen) {
        let tempArray = new Array(urinalSituation.length - 1)
        tempArray.fill(1)
        const allUrinalsButLast = tempArray.map((_, index) => index + 1)
        return allUrinalsButLast
    }

    if (matchesPattern("1*.4.", urinalSituation)
        || matchesPattern("*2..5", urinalSituation)) {
        return [3]
    }

    if (matchesPattern(".2.4.", urinalSituation)) {
        return [1]
    } else if (matchesPattern("1.3.5", urinalSituation)
               || matchesPattern("...4*", urinalSituation)) {
        return [2]
    }

    if (matchesPattern(".23..", urinalSituation)) {
        return [1, 5]
    }

    const urinalFreeOfNeighbors = firstOpenSlotWithoutNeighbors(urinalSituation)
    if (urinalFreeOfNeighbors != -1) {
        return [urinalFreeOfNeighbors]
    }

    const firstOpenUrinal = urinalSituation.indexOf(".")
    return [firstOpenUrinal + 1]
}


const matchesPattern = (pattern, situation) => {
  // TODO: Check if pattern is longer than situation
  // or either is empty (bad input)
  for (let i = 1; i <= pattern.length; i++) {
    if (pattern.charAt(i-1) === "*") {
      continue
    }
    if (pattern.charAt(i-1) === situation.charAt(i-1)) {
      continue
    }
    return false
  }
  return true
}


// This general function takes in urinalSituation string and returns
// the one-based index of the first open slot without neighbors or 
// -1 if no such slot exists.
const firstOpenSlotWithoutNeighbors = urinalSituation => {
    for (let slot = 0; slot < urinalSituation.length; slot++) {
        leftSide = slot - 1
        rightSide = slot + 1
        if (urinalSituation.charAt(slot) !== ".") {
            continue
        } else if (leftSide >= 0 && urinalSituation.charAt(leftSide) !== ".") {
            continue
        } else if (rightSide < urinalSituation.length && urinalSituation.charAt(rightSide) !== ".") {
            continue
        } else {
            return slot + 1
        }
    }

    // Couldn't find a slot without neighbors
    return -1
}
