QUnit.module("Easy Situations (5 urinals)")
QUnit.test( "When no one is there...", function( assert ) {
    const occupiedUrinals = [false, false, false, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [1, 2, 3, 4], 
        "Use any one except #5 (1-4)."
    )
});
QUnit.test( "When someone is at #3...", function( assert ) {
    const occupiedUrinals = [false, false, true, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [1], 
        "Use #1."
    )
});
QUnit.test( "When someone is at #1...", function( assert ) {
    const occupiedUrinals = [true, false, false, false, false]

    assert.deepEqual( 
        urinalToUse(occupiedUrinals),
        [3], 
        "Use #3."
    )
});