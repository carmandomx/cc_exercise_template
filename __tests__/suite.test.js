const { cToF } = require('../exercise');

test('Testing the cToF exercise', () => { 
    expect(cToF(10)).toBeDefined();
    expect(typeof cToF(0) === 'number').toBeTruthy()
    expect(cToF(-30)).toBe(-22);
    expect(cToF(5)).toBe(41);
    expect(cToF(50)).toBe(122);
 })