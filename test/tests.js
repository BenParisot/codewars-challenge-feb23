const test = QUnit.test;
function checkArray(array) {
    let checkEven = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            checkEven.push(array[i]);
        }
    }
    if(checkEven.length > 1) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] % 2 === 1) {
                return array[i];
            }
        }
    }
    else {
        return checkEven;
    }
 
}




test('find odd number in array of even and return it', function(assert) {
    const array = [2, 4, 0, 100, 4, 11, 2602, 36];

    const expected = 11;
    const result = checkArray(array);

    assert.equal(result, expected);
});

test('find even number in array of odd and return it', function(assert) {
    const array = [1, 3, 7, 9, 4, 11];

    const expected = 4;
    const result = checkArray(array)


    assert.equal(result, expected);
});