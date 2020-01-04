//global function provided by test
const {calculatetip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math');

// test("Hello World!", ()=>{

// });

// test("This should fail",()=>{
//     throw new Error('Failure');
// });

test('Should calculate total with tip', ()=>{
    const total = calculatetip(10, .3);
    //expect is a library provided by jest. will check if total is 13
    expect(total).toBe(13);
    // if (total!==13) {
    //     throw new Error(`Total tip should be 13. Got ${total}`);
    // }

});

test('Should calculate total with default tip',()=>{
    const total = calculatetip(10);
    //expect is a assertion library provided by jest
    expect(total).toBe(12.5);
})

test("Should convert 32F to  0 C", ()=>{
    const temp = fahrenheitToCelsius(32);
    expect(temp).toBe(0);
});


test('Should convert 0 C to 32 F', ()=>{
    const temp = celsiusToFahrenheit(0);
    expect(temp).toBe(32);
})

// test('Async test demo', (done)=>{
//     setTimeout(()=>{
//         //jest doesn't wait to perform expect so we need to add done so that it can perform assertion operation
//         expect(1).toBe(2);
//         done();
//     }, 2000)
// });

test('Should add two numbers', (done)=>{
    add(2,3).then((sum)=>{
        expect(sum).toBe(5);
        done();
    });
    
})

test('Should add two numbers async await', async ()=>{
    //dnt have to use done when using async await keywords
    const sum = await add(10,22);
    expect(sum).toBe(32);
});

