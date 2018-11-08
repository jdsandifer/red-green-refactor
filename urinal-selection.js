// See "Proper Urinal Etiquette" video to understand this algorithm.
const urinalToUse = whetherEachUrinalIsOccupied => {
    const numberOfUrinals = whetherEachUrinalIsOccupied.length
    if ( numberOfUrinals === 0) {
        return []
    }
    const maxUrinalsForThisFunction = 35  // due to internal representation
    if (numberOfUrinals > maxUrinalsForThisFunction) {
        throw new TooManyUrinals()
    }

    const urinalSituation = whetherEachUrinalIsOccupied.map(urinalDigit).join("")
    return urinalChoice(urinalSituation)
}

function TooManyUrinals() {
    this.message = "There are too many urinals in the situation.";
    this.name = 'TooManyUrinals';
}

const urinalDigit = (isTaken, index) => {
    const unoccupiedDigit = "."
    const oneBasedIndex = index + 1
    const baseThirtySixDigitForOccupied = 
        oneBasedIndex <= 9 ? oneBasedIndex : String.fromCharCode(oneBasedIndex + 87)
    
    return isTaken ? baseThirtySixDigitForOccupied : unoccupiedDigit
}

const urinalChoice = urinalSituation => {
    const allUrinalsAreOpen = [].every.call(urinalSituation, digit => digit === ".")
    if (allUrinalsAreOpen) {
        const oneLessThanNumberOfUrinals = urinalSituation.length - 1
        const anyUrinalButLast = oneThrough(oneLessThanNumberOfUrinals)
        return anyUrinalButLast
    }

    if (urinalSituation.length = 5) {
        return urinalChoiceFromVideo(urinalSituation)
    }

    return urinalChoiceInOtherCases(urinalSituation)
}

const urinalChoiceFromVideo = situation => {
    if (matchesPattern("1*.4.", situation)
        || matchesPattern("*2..5", situation)) {
        return [3]
    }

    if (matchesPattern("1.3.5", situation)
               || matchesPattern("...4*", situation)) {
        return [2]
    }

    if (matchesPattern(".23..", situation)) {
        return [1, 5]
    }

    return urinalChoiceInOtherCases(situation)
}

const urinalChoiceInOtherCases = situation => {
    const urinalFreeOfNeighbors = firstOpenSlotWithoutNeighbors(situation)
    if (urinalFreeOfNeighbors != -1) {
        return [urinalFreeOfNeighbors]
    }

    const firstOpenUrinal = situation.indexOf(".") + 1
    return [firstOpenUrinal]
}

const oneThrough = max => {
    let tempArray = new Array(max)
    tempArray.fill(1)
    return tempArray.map((_, index) => index + 1)
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
