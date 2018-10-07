// See "Proper Urinal Etiquette" video to understand this algorithm.
const urinalToUse = isOccupied => {
  // TODO: Ensure isOccupied has 35 or fewer booleans and at least one is false
  const urinalSituation = isOccupied.map(urinalSituationFromBooleanArray).join("")
  return urinalChoice(urinalSituation)
}


const urinalSituationFromBooleanArray = (isTaken, index) => {
  const unoccupiedDigit = "."
  const oneBasedIndex = index + 1
  const baseThirtySixDigitForOccupied = 
      oneBasedIndex <= 9 ? oneBasedIndex : String.fromCharCode(oneBasedIndex + 87)
  
  return isTaken ? baseThirtySixDigitForOccupied : unoccupiedDigit
}


const urinalChoice = urinalSituation => {
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

    const firstOpenUrinal = urinalSituation.indexOf(".") + 1
    return [firstOpenUrinal]
}


const matchesPattern = (pattern, situation) => {
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

    const noOpenSlotCode = -1
    return noOpenSlotCode
}
