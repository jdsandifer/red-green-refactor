QUnit.module("5 Urinals")
QUnit.test( "Easy situations are handled correctly.", function( assert ) {
    let occupiedUrinals = [false, false, false, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [1, 2, 3, 4], 
        "When no one is there, we choose any urinal except #5 (1-4)."
    )

    occupiedUrinals = [false, false, true, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [1], 
        "When #3 is occupied, we choose #1."
    )

    occupiedUrinals = [true, false, false, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [3], 
        "When #1 is occupied, we choose #3."
    )

    occupiedUrinals = [false, false, false, false, true]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [1], 
        "When #5 is occupied, we choose #1."
    )

    occupiedUrinals = [true, false, true, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [5], 
        "When someone is at #1 and #3, we choose #5."
    )
});