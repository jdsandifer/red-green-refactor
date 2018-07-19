QUnit.module("Easy Situations (5 urinals)")
QUnit.test( "When no one is there...", function( assert ) {
    const situation = [false, false, false, false, false]

    assert.deepEqual( 
        urinalToUse(situation),
        [1, 2, 3, 4], 
        "Use any one except #5 (1-4)."
    )
});